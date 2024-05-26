function ProductFilterSidebar() {
  return (
    <div className="col-md-3 sidebar">
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head">
          <i className="icon fa fa-align-justify fa-fw"></i> Categories
        </div>
        <nav className="yamm megamenu-horizontal">
          <ul className="nav">
            <li className=" menu-item">
              {" "}
              <a href="?sort-by=Make up" className="-toggle" data-toggle="">
                <i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Make
                up
              </a>
            </li>
            <li className="dropdown menu-item">
              {" "}
              <a href="?sort-by=Body" className="dropdown-toggle" data-toggle="">
                <i className="icon fa fa-laptop" aria-hidden="true"></i>Body care
              </a>
            </li>
            <li className=" menu-item">
              {" "}
              <a href="?sort-by=Skincare" className="-toggle" data-toggle="">
                <i className="icon fa fa-paw" aria-hidden="true"></i>Skincare
              </a>
            </li>
            <li className=" menu-item">
              {" "}
              <a href="?sort-by=Fragrance" className="-toggle" data-toggle="">
                <i className="icon fa fa-clock-o"></i>Fragrance
              </a>
            </li>
            <li className=" menu-item">
              {" "}
              <a href="?sort-by=Hair" className="-toggle" data-toggle="">
                <i className="icon fa fa-diamond"></i>Hair
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-module-container">
        <div className="sidebar-filter"></div>
      </div>
    </div>
  );
}
