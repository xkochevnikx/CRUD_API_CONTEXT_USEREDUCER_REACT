import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//? тут в главном сиэсс можем задавать стили любому элементу в документе
import "./index.css";
//? импортируем браузер роутер
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //? в браузер роутер дом оборачиваем весь наш документ
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
