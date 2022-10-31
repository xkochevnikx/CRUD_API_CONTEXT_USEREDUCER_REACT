import React from "react";
//? импортруем все компоненты которые будут на путях и оборачиваем в роутес все пути прописывая адреса и присваивая им элементы
import { Route, Routes } from "react-router-dom";
import AddTodo from "./Components/AddTodo/AddTodo";
import EditTodo from "./Components/EditTodo/EditTodo";
import HomePage from "./Components/HomePage/HomePage";
import TodoList from "./Components/TodoList/TodoList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/edit" element={<EditTodo />} />
    </Routes>
  );
};

export default MainRoutes;
