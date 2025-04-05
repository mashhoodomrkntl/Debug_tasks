import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task1 from "./Task-1(counter)/function";
import Api from "./Task-2(accordian)/Api";
import Accordion from "./Task-2(accordian)/Accordion";
import Form from "./Task-3(Form)/Form";
import MultipleFieldForm from "./Task-3(Form)/multipleFieldForm";
import FormValidation from "./Task-4(Form&Validation)/FormValidation";
import Search from "./Task-5(local-search)/Search";
import SearchD from "./Task-5.1(api search dynamic)/SearchD";
import Todo from "./Tode-app/Todo";
import DataAccess from "./Task-7-(Context API)/dataAccess";
import { AuthContext } from "./Task-7-(Context API)/Context/AuthContext/AuthContext";
import Anywhere from "./Task-7-(Context API)/anywhere";
import UsingCustomHook from "./Day-9(Custom Hooks)/hooks/usingCustomHook";
import UseRefHook from "./Day-9(Custom Hooks)/UseRef/UseRefHook";

function App() {
  return (
    <>
      {/* <Task1/> */}
      {/* <Api/> */}
      {/* <Accordion/> */}
      {/* <Form/> */}
      {/* <MultipleFieldForm/> */}
      {/* <FormValidation/> */}
      {/* <MultipleFieldForm/> */}
      {/* <Search/> */}
      {/* <SearchD/> */}
      {/* <Todo/> */}
      {/* <AuthContext.Provider value={"mashhoo"}>
        <DataAccess />
        <Anywhere />
      </AuthContext.Provider> */}
      {/* <UsingCustomHook/> */}
      <UseRefHook/>
    </>
  );
}

export default App;
