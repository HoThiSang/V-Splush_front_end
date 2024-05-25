import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductFilterSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-md-3 sidebar ml-3">
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head head-bg" onClick={toggleMenu}>
          <i className="icon fa fa-align-justify fa-fw"></i> Categories
        </div>
        {isOpen && (
          <nav className="yamm megamenu-horizontal">
            <ul className="nav">
              <MenuItem
                to="?sort-by=Make up"
                icon="fa fa-shopping-bag"
                label="Make up"
              />
              <MenuItem
                to="?sort-by=Body"
                icon="fa fa-laptop"
                label="Body care"
              />
              <MenuItem
                to="?sort-by=Skincare"
                icon="fa fa-paw"
                label="Skincare"
              />
              <MenuItem
                to="?sort-by=Fragrance"
                icon="fa fa-clock-o"
                label="Fragrance"
              />
              <MenuItem to="?sort-by=Hair" icon="fa fa-diamond" label="Hair" />
            </ul>
          </nav>
        )}
      </div>
      <div className="sidebar-module-container">
        <div className="sidebar-filter"></div>
      </div>
    </div>
  );
}

function MenuItem({ to, icon, label }) {
  return (
    <li className="menu-item">
      <Link to={to} className="menu-toggle">
        <i className={icon} aria-hidden="true"></i> {label}
      </Link>
    </li>
  );
}

export default ProductFilterSidebar;
