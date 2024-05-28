import React from "react";
import { Link } from "react-router-dom";

function ProductFilterSidebar({ setSelectedCategory }) {

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="col-md-3 sidebar siderbarProduct">
      <div className="side-menu animate-dropdown outer-bottom-xs siderbarProduct">
        <div className="head head-bg">
          <i className="icon fa fa-align-justify fa-fw"></i> Categories
        </div>
        <nav className="yamm megamenu-horizontal">
          <ul className="nav">
            <MenuItem
              onClick={() => handleCategoryClick(1)}
              icon="fa fa-shopping-bag"
              label="Make up"
            />
            <MenuItem
              onClick={() => handleCategoryClick(2)}
              icon="fa fa-paw"
              label="Skincare"
            />
             <MenuItem
              onClick={() => handleCategoryClick(3)}
              icon="fa fa-clock-o"
              label="Fragrance"
            />
            <MenuItem
              onClick={() => handleCategoryClick(4)}
              icon="fa fa-diamond"
              label="Hair"
            />
            <MenuItem
              onClick={() => handleCategoryClick(5)}
              icon="fa fa-laptop"
              label="Body care"
            />
          </ul>
        </nav>
      </div>
      <div className="sidebar-module-container">
        <div className="sidebar-filter"></div>
      </div>
    </div>
  );
}

function MenuItem({ onClick, icon, label }) {
  return (
    <li className="menu-item">
      <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className="menu-toggle">
        <i className={icon} aria-hidden="true"></i> {label}
      </a>
    </li>
  );
}

export default ProductFilterSidebar;
