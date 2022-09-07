import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Ename/Ename.css";

const Ename = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  const backToJoin = () => {};
  return (
    <div className="ename-main-container">
      <div className="ename-container">
        <a onClick={backToJoin} className="ename-cross" href="/">
          X
        </a>
        <h1 className="error">Error</h1>
        <div className="ename-message">Please Enter Your Name</div>
      </div>
    </div>
  );
};

export default Ename;
