import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const SiteBody = () => {
  return (
    <div classname="">
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBody;
