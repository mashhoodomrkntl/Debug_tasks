import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
