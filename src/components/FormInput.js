import React, { useState, Fragment } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredage, setenteredage] = useState("");
  const [enteredgender, setenteredgender] = useState("");
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredPhone, setenteredPhone] = useState("");
  const registerHandler = (event) => {
    event.preventDefault();
    props.onAdduser(
      enteredName,
      enteredage,
      enteredEmail,
      enteredPhone,
      enteredgender
    );
    setenteredName("");
    setenteredEmail("");
    setenteredgender("");
    setenteredage("");
    setenteredPhone("");
  };
  const namechangeHandler = (event) => {
    setenteredName(event.target.value);
  };
  const agechangeHandler = (event) => {
    setenteredage(event.target.value);
  };
  const emailchangeHandler = (event) => {
    setenteredEmail(event.target.value);
  };
  const phonechangeHandler = (event) => {
    setenteredPhone(event.target.value);
  };
  const genderchangeHandler = (event) => {
    setenteredgender(event.target.defaultValue);
  };
  return (
    <Fragment>
      <div className="form-container">
        <form onSubmit={registerHandler}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={enteredName}
              onChange={namechangeHandler}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="text"
              value={enteredage}
              onChange={agechangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={genderchangeHandler}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={genderchangeHandler}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={genderchangeHandler}
            />
            Other
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={enteredEmail}
              onChange={emailchangeHandler}
            ></input>
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={enteredPhone}
              onChange={phonechangeHandler}
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default FormInput;
