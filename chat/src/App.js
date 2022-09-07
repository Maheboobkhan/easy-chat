import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Join from "./Component/Join/Join";
import Chats from "./Component/Chats/Chats";
import Ename from "./Component/Ename/Ename";

const App = () => {
  console.log(process.env);
  return (
    <Routes>
      <Route path="/" element={<Join />}></Route>
      <Route path="/chatting" element={<Chats />}></Route>
      <Route path="/ename" element={<Ename />}></Route>
    </Routes>
  );
};

export default React.memo(App);
