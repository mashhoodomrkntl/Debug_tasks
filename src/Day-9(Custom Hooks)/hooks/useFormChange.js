import { useState } from "react";

export const useFormInput = () => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    console.log(state);
  };
  return {
    value: state, // ⚠️ value instead of "state"
    onChange: handleChange, // ⚠️ key should be onChange
  };
  //   return{
  //     state,
  //     handleChange,
  //   }
};
