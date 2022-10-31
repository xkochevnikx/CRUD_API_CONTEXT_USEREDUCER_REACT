import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      //? тут мы на одной странице отображаем и добавление и отображение
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default HomePage;
