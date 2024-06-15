import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUser = (userObj) => {
    console.log(userObj);
    setUserList([...userList, userObj]);
  };

  return (
    <div className="container pt-4">
      <h2 className="text-center">User List</h2>
      <hr />
      {/* form component here  */}
      <UserForm addUser={addUser} />
      {/* tabel component here */}

      <UserTable userList={userList} />
    </div>
  );
};

export default App;
