import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "../pages/App";
import HandleRedirect from "../pages/handle-redirect";

const Main = () => {
  return (
    <Routes>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" element={<App />}></Route>
      <Route path="/handle-redirect" element={<HandleRedirect />}></Route>
    </Routes>
  );
};

export default Main;
