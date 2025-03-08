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
      <Todo/>
    </>
  );
}

export default App;
