import React from "react";
import "../style.scss"
import ADD from "../images/add.png"

const Register = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">On the Way</span>
      <span className="title">Register</span>
      <form>
        <input type="text" placeholder="display name"/>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input style={{display:"none" }} type="file" id ="file"/>
        <label htmlFor = "file">
          <img src={ADD} alt="" width="35" height="35"/>
          <span>Add a Profile Photo</span>
        </label>
        <button>Sign up</button>
      </form>
      <p>Already have an account? Login</p>
    </div>
  </div>
  );
}

export default Register