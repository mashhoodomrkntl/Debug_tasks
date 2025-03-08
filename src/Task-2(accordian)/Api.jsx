import React, { useEffect, useState } from "react";
import axios from "axios";
const Api = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user?.name}{" "}
              <button onClick={() => handleDelete(user.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Api;
