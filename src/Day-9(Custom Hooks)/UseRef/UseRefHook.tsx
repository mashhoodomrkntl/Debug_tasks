import React, { useEffect, useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  console.log(inputRef.current);
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRefHook;
