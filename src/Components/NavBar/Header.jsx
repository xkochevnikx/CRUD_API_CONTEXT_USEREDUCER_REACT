import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  //? оборачиваем элементы навбара в линки импортируемые из роутер дома и прописываем пути из маэйроутс
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Link to="/add">
              <Nav.Item>AddTodo</Nav.Item>
            </Link>
            <Link to="/todos">
              <Nav.Item>TodoList</Nav.Item>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
