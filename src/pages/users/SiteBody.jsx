import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const SiteBody = ({ children }) => {
  return (
    <div classname="">
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <div className="content">{children}</div>
            </div>
            <Footer />
            <div class="content-backdrop fade"></div>
          </div>
          <div class="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </div>
  );
};

export default SiteBody;
