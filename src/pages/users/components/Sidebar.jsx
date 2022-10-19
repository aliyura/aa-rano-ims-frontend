import React from "react";

const Sidebar = () => {
  return (
    <div>
      {" "}
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <span className="app-brand-logo demo">{/* logo here */}</span>
            <span className="app-brand-text demo menu-text fw-bolder ms-2">
              Sneat
            </span>
          </a>

          <a
            href="/"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className="menu-item active">
            <a href="index.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </a>
          </li>

          <li className="menu-item">
            <a href="/" class="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Layouts</div>
            </a>

            <ul className="menu-sub">
              <li className="menu-item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div data-i18n="Without menu">Without menu</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div data-i18n="Without navbar">Without navbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-container.html" className="menu-link">
                  <div data-i18n="Container">Container</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-fluid.html" className="menu-link">
                  <div data-i18n="Fluid">Fluid</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-blank.html" className="menu-link">
                  <div data-i18n="Blank">Blank</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pages</span>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-dock-top"></i>
              <div data-i18n="Account Settings">Account Settings</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a
                  href="pages-account-settings-account.html"
                  className="menu-link"
                >
                  <div data-i18n="Account">Account</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-account-settings-notifications.html"
                  className="menu-link"
                >
                  <div data-i18n="Notifications">Notifications</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-account-settings-connections.html"
                  className="menu-link"
                >
                  <div data-i18n="Connections">Connections</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
              <div data-i18n="Authentications">Authentications</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a
                  href="auth-login-basic.html"
                  class="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Login</div>
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="auth-register-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Register</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="auth-forgot-password-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Forgot Password</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-cube-alt"></i>
              <div data-i18n="Misc">Misc</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="pages-misc-error.html" className="menu-link">
                  <div data-i18n="Error">Error</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-misc-under-maintenance.html"
                  className="menu-link"
                >
                  <div data-i18n="Under Maintenance">Under Maintenance</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Components</span>
          </li>

          <li className="menu-item">
            <a href="cards-basic.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Basic">Cards</div>
            </a>
          </li>

          <li className="menu-item">
            <a href="/" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="User interface">User interface</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="ui-accordion.html" className="menu-link">
                  <div data-i18n="Accordion">Accordion</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-alerts.html" className="menu-link">
                  <div data-i18n="Alerts">Alerts</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-badges.html" className="menu-link">
                  <div data-i18n="Badges">Badges</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-buttons.html" className="menu-link">
                  <div data-i18n="Buttons">Buttons</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-carousel.html" className="menu-link">
                  <div data-i18n="Carousel">Carousel</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-collapse.html" className="menu-link">
                  <div data-i18n="Collapse">Collapse</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-dropdowns.html" className="menu-link">
                  <div data-i18n="Dropdowns">Dropdowns</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-footer.html" className="menu-link">
                  <div data-i18n="Footer">Footer</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-list-groups.html" className="menu-link">
                  <div data-i18n="List Groups">List groups</div>
                </a>
              </li>
              <li class="Namemenu-item">
                <a href="ui-modals.html" className="menu-link">
                  <div data-i18n="Modals">Modals</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-navbar.html" className="menu-link">
                  <div data-i18n="Navbar">Navbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-offcanvas.html" className="menu-link">
                  <div data-i18n="Offcanvas">Offcanvas</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                  <div data-i18n="Pagination &amp; Breadcrumbs">
                    Pagination &amp; Breadcrumbs
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-progress.html" className="menu-link">
                  <div data-i18n="Progress">Progress</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-spinners.html" className="menu-link">
                  <div data-i18n="Spinners">Spinners</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-tabs-pills.html" className="menu-link">
                  <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-toasts.html" className="menu-link">
                  <div data-i18n="Toasts">Toasts</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-tooltips-popovers.html" className="menu-link">
                  <div data-i18n="Tooltips & Popovers">
                    Tooltips &amp; popovers
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="ui-typography.html" className="menu-link">
                  <div data-i18n="Typography">Typography</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
