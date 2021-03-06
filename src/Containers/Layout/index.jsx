import React from "react";
import Sidebar from "../Sidebar";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
