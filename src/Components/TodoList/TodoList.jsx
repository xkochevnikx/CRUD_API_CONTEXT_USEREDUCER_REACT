import React, { useContext } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { todoContext } from "../../context/TodoContext";

const TodoList = () => {
  const { todos, getTodos, changeStatus, deliteTask, editTask } =
    useContext(todoContext);
  //? если законсолить что прилетело из адд то прилетит пустой массив это изначально дефолтное значение. и ставя компонент зависимости мы говорим отработай один раз в начале
  useEffect(() => {
    getTodos();
  }, []);


  //? в спане ниже применяется условный рендеринг , задаём ему класс и через тернарный опаратор говорит что если под ключём status в элементе лежит true то присвой ему класс completed а если false то ничего не присваиваем . далее стилизуем класс completed в css
  return (
    <div>
      {todos.map(item => (
        <Card key={item.id} border="primary" style={{ width: "18rem" }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <span className={item.status ? "completed" : ""}>{item.task}</span>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => changeStatus(item.id)}
            />
            <div>
              <Button
                onClick={() => deliteTask(item.id)}
                variant="danger"
                size="sm">
                delite
              </Button>

              <Link to="/edit">
                <Button
                  onClick={() => editTask(item.id)}
                  size="sm"
                  variant="primary">
                  edit
                </Button>
              </Link>
            </div>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
