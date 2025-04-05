import React from "react";
import { useFormInput } from "./useFormChange";

const UsingCustomHook = () => {
  const name = useFormInput();
//   const { state, handleChange } = useFormInput();
  return (
    <div>
      <form action="">
        enter your name
        <input type="text"  {...name} />
        {/* <input type="text" onChange={handleChange} value={state} /> */}
      </form>
    </div>
  );
};

export default UsingCustomHook;
