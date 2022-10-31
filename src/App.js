import Header from "./Components/NavBar/Header";
import TodoContextProvider from "./context/TodoContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    //? оборачивем в компонент контекс детей которым будет передавать данные.
    <>
      <TodoContextProvider>
        <Header />
        <MainRoutes />
      </TodoContextProvider>
    </>
  );
}

export default App;
