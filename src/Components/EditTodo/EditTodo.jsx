import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../context/TodoContext";

const EditTodo = () => {
  const { taskToEdit, saveTask } = useContext(todoContext);
  //? дефолтное значение объекта что прилетает первый раз это null, и мы не можем подставить этот null в значение инпута для редактирования, поэтому создаём локальный стейт в который значения которого первый раз подставиться null. поэтому мы создаём юзеффект который при повторном изменении объекта что прилетает из контекста увидит это и подставит его значение через функцию изменения стейта. а уже далее обращаясь к стейту и его ключу task подставим это значение инпуту
  const [newEditItem, setNewEditItem] = useState(taskToEdit);

  const navigate = useNavigate();

  //? эта функция вызывается на каждое изменение поля инпута и она создаёт обьект из копии первоначального но перезаписывает ключ task на значение из инпута на значение из его поля ввода .Далее она вызывает и функцию изменения стейта и перезаписывает его с новыми данными
  function handleEditInput(e) {
    let newTask = {
      ...newEditItem,
      task: e.target.value,
    };
    setNewEditItem(newTask);
  }
  //? следит за изменениями первоначально прилетающего объекта и перезаписывает его в локал стейт
  useEffect(() => {
    setNewEditItem(taskToEdit);
  }, [taskToEdit]);

  //? далее ниже применяем условный рендеринг, мы говорим если объект успешно прилетел в newEditTask то создаём инпут (с заполненным полем ввода из newEditTask.task) и кнопку сохранить. Если ничего не прилетело это false и на экране надпись loading (можно спинер вставить)
  //? после нажатия кнопки сохранить страницу перкидывает на homepage с помощью метода navigate из роутер дома. Наверху мы вызываем метод и сохраняем его в переменную а в кнопке на onClick вторым атрибутом вызываем его и указывам путь.
  return (
    <div className="d-flex m-3">
      {newEditItem ? (
        <>
          <Form.Control
            type="text"
            onChange={handleEditInput}
            placeholder="add todo"
            className="w-25"
            value={newEditItem.task}
          />
          <Button
            onClick={() => {
              saveTask(newEditItem);
              navigate("/");
            }}>
            Save
          </Button>{" "}
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default EditTodo;
