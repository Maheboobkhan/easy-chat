import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReactscrollBottom from "react-scroll-to-bottom";

import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import "../Chats/Chats.css";

const Chats = () => {
  const inputVal = useRef();
  const [join, setJoin] = useState(false);
  const [add, setAdd] = useState([]);
  const [message, setMessage] = useState("");
  const location = useLocation();
  let socket = useRef();
  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SERVER_URL);
    socket.current.emit("con", location.state);
    socket.current.on("iAmCon", (data) => {
      toast.success(data + " has joined");
    });
    socket.current.on("iAmDis", (data) => {
      toast.error(data + " has left");
    });
    socket.current.on("receiveMsg", (data) => {
      setAdd((pre) => {
        return [...pre, data];
      });
    });
  }, []);

  const handleSet = (e) => {
    setMessage(e.target.value);
  };

  const sendMsg = () => {
    if (inputVal.current.value === "") {
      setJoin(!join);
    } else {
      setJoin(join);
      socket.current.emit("sendMsg", { message, user: location.state });
      inputVal.current.value = "";
      inputVal.current.focus();
    }
    setJoin(false);
  };

  const run = (e) => {
    if (e.key === "Enter") {
      sendMsg();
    }
  };

  return (
    <div className="chat-main-container">
      <Toaster style={{ fontSize: "45px" }} />
      <div className="chat-container">
        <div className="main-heading">
          <h2 className="chat-heading">CHAT APP</h2>
          <a href="/">
            <h3 className="cross">X</h3>
          </a>
        </div>
        <ReactscrollBottom className="chat-msg">
          {add.map((ele) => {
            return (
              <div className="msg-block">
                <span className={ele.user === location.state ? "me" : ""}>
                  {ele.user === location.state
                    ? ""
                    : React.createElement(
                        "p",
                        { className: "user" },
                        ele.user + ":"
                      )}
                  {ele.message}
                </span>
              </div>
            );
          })}
        </ReactscrollBottom>
        <div className="input-container">
          <input
            className="chat-input"
            ref={inputVal}
            onChange={handleSet}
            type="text"
            onKeyDown={run}
          />
          <button onClick={sendMsg} disabled={join} className="send-btn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;

// {
//   join.map((ele) => {
//     return <p className="user-join">{ele} has joined</p>;
//   });
// }

// https://easilychat.herokuapp.com
