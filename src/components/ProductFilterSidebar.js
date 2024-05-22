function ProductFilterSidebar() {
  return (
    <div class="col-md-3 sidebar">
      <div class="side-menu animate-dropdown outer-bottom-xs">
        <div class="head">
          <i class="icon fa fa-align-justify fa-fw"></i> Categories
        </div>
        <nav class="yamm megamenu-horizontal">
          <ul class="nav">
            <li class=" menu-item">
              {" "}
              <a href="?sort-by=Make up" class="-toggle" data-toggle="">
                <i class="icon fa fa-shopping-bag" aria-hidden="true"></i>Make
                up
              </a>
            </li>
            <li class="dropdown menu-item">
              {" "}
              <a href="?sort-by=Body" class="dropdown-toggle" data-toggle="">
                <i class="icon fa fa-laptop" aria-hidden="true"></i>Body care
              </a>
            </li>
            <li class=" menu-item">
              {" "}
              <a href="?sort-by=Skincare" class="-toggle" data-toggle="">
                <i class="icon fa fa-paw" aria-hidden="true"></i>Skincare
              </a>
            </li>
            <li class=" menu-item">
              {" "}
              <a href="?sort-by=Fragrance" class="-toggle" data-toggle="">
                <i class="icon fa fa-clock-o"></i>Fragrance
              </a>
            </li>
            <li class=" menu-item">
              {" "}
              <a href="?sort-by=Hair" class="-toggle" data-toggle="">
                <i class="icon fa fa-diamond"></i>Hair
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-module-container">
        <div class="sidebar-filter"></div>
      </div>
    </div>
  );
}
