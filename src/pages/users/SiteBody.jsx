import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashBody from "./DashBody";

const SiteBody = () => {
  return (
    <div classname="">
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <DashBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBody;
