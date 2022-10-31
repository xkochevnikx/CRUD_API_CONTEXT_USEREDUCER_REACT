import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { todoContext } from "../../context/TodoContext";

//? создаём с помощью бутсрапа вёрстку, инпут  и кнопку добавить
const AddTodo = () => {
  //? ловим через контекст и дестректуризацию функцию добавления
  const { addTask } = useContext(todoContext);
  //? создаём локалный стейт для сохранения значений инпута
  //?  инпут присваиваем значения стейта и вешаем событие которое при каждом изменении в поле ввода будет перезаписывать стейт
  //? на кнопку добавить вешаем вызов функции которая будет создавать объект со значением ключа таск в виде значения локального стейта повешенного на инпут. При нажатии добавить после создания переменной вызыватеся функция добавления на бэк переданная сюда контекстом и в её аргументы передаёться созданнный объект. поле ввода очищается
  const [inpValue, setInpValue] = useState("");

  function handleClick() {
    let newObj = {
      task: inpValue,
      status: false,
    };
    addTask(newObj);
    setInpValue("");
  }
  return (
    <div className="d-flex m-3">
      <Form.Control
        type="text"
        placeholder="add todo"
        className="w-25"
        value={inpValue}
        onChange={e => setInpValue(e.target.value)}
      />
      <Button onClick={handleClick}> Add</Button>
    </div>
  );
};

export default AddTodo;
