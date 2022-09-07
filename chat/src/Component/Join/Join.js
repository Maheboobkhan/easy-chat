import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../Join/Join.css";

const Join = () => {
  const inputVal = useRef();
  const [name, setName] = useState("");
  const getText = (e) => {
    setName(e.target.value);
  };

  const redirect = () => {
    if (inputVal.current.value === "") {
      window.location.href = "/ename";
    }
  };
  return (
    <div className="join-main-container">
      <div className="join-container">
        <input
          ref={inputVal}
          className="join-input"
          type="text"
          placeholder="Enter Your Name"
          onChange={getText}
        />
        <Link to="/chatting" state={name}>
          <button onClick={redirect} className="join-btn">
            Join Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Join);
