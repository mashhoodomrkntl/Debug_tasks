import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext/AuthContext";
import Anywhere from "./anywhere";
// import AuthContext from './Context/AuthContext/AuthContext'

const DataAccess = () => {
  const data = useContext(AuthContext);
  console.log("data", data);
  return (
    <div>
      datadatadata <br />
    </div>
  );
};

export default DataAccess;
