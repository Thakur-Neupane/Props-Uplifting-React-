import React, { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user);
  return (
    <div className="w-50 shadow-lg p-5 m-auto mt-5 rounded">
      <form action="">
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              id="inputState"
              className="form-select"
              required
              defaultValue=""
              onChange={handleOnChange}
            >
              <option value="">Choose...</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Your name"
              aria-label="Your name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
