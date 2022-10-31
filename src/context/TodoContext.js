import axios from "axios";
import React, { createContext } from "react";
import { useReducer } from "react";

//? создаём компонент контекст вызываем его присваивая переменной
export const todoContext = createContext();

const INIT_STATE = {
  //? после того как сюда прилетел новый объект мы передаём его в контекст и ловим в компоненте отображения
  todos: [],
  taskToEdit: null,
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payLoad };
    case "EDIT_TODO":
      return { ...state, taskToEdit: action.payLoad };
    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  //? это функция извлекает добавленный на бэк объект и вызывает метод редюсера диспатч которому передаёт тип экшена
  async function getTodos() {
    const { data } = await axios("http://localhost:8000/todos");
    dispatch({
      type: "GET_TODOS",
      payLoad: data,
    });
  }

  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  //? тут сама функция добавления делает запрос на добавления на бэк объекта и после вызывает функцию извлечения , передаёт её в стейт редюсера и от туда уже объект передаётся в компонент отображения тудулист
  async function addTask(newTask) {
    await axios.post("http://localhost:8000/todos", newTask);
    getTodos();
  }

  async function changeStatus(id) {
    //? функция изменения статуса принимает id и делает запрос на изменение ключа status
    let { data } = await axios.patch(`http://localhost:8000/todos/${id}`);
    await axios.patch(`http://localhost:8000/todos/${id}`, {
      status: !data.status,
    });
    getTodos();
  }

  async function deliteTask(id) {
    await axios.delete(`http://localhost:8000/todos/${id}`);
    getTodos();
  }

  async function editTask(id) {
    let { data } = await axios(`http://localhost:8000/todos/${id}`);
    dispatch({
      type: "EDIT_TODO",
      payLoad: data,
    });
  }

  async function saveTask(newTask) {
    //? тут к нам прилетел обновлённый объект и делаем запрос на изменения обращаясь к нему подставляя id из прилетевшего объекта . через запятую указываем вторым аргументом что меняем его на новый объект
    await axios.patch(`http://localhost:8000/todos/${newTask.id}`, newTask);
    getTodos();
  }

  return (
    //? оборачиваем в эту переменную контекст вызвав метод провайдер элементы которым хотим передать данные от сюда, в атрибуте валуэ приписыаем непосредственно передаваемые данные
    <todoContext.Provider
      value={{
        addTask,
        todos: state.todos,
        taskToEdit: state.taskToEdit,
        getTodos,
        changeStatus,
        deliteTask,
        editTask,
        saveTask,
      }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
