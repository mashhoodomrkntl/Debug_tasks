import React, { useState } from "react";

const Accordion = () => {
  const data = [
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
  ];
  const [toggle, setToggle] = useState(null);
  const handleonClick = (id) => {
    setToggle(toggle == id ? null : id);
  };
  return (
    <div>
      {data.map((acc) => {
        return (
          <div key={acc.id}>
            <h2 onClick={() => handleonClick(acc.id)}>{acc.title}</h2>
            {toggle == acc.id && <p>{acc.content}</p>}
          </div>
        );
      })} 
    </div>
  );
};

export default Accordion;
