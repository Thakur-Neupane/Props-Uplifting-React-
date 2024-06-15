import React from "react";

const UserTable = ({ userList }) => {
  return (
    <div className="mt-5 shadow-lg p-2 rounded">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Gender</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td></td>
              <td>{user.gender}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
