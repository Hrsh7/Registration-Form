import React, { Fragment } from "react";
import "./ShowData.css";

const ShowData = (props) => {
  if (props.data.length === 0) {
    return <div></div>;
  }
  return (
    <Fragment>
      <h1>Your Details</h1>
      <div className="user-container">
        <div>
          <p>Name: {props.data[0].name.username}</p>
          <p>Age: {props.data[0].age.userage}</p>
          <p>Gender:{props.data[0].gender.usergender}</p>
          <p>Email: {props.data[0].email.useremail}</p>
          <p>Phone Number: {props.data[0].phone.userphn}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowData;
