import React from 'react';
function Header() {
    return (
        <header className="header-style-1">
        <div className="top-bar animate-dropdown">
            <div className="container">
                <div className="header-top-inner">
                    <div className="cnt-account">
                        <ul className="list-unstyled">
                            <li><a href="/!"><i className="icon fa fa-heart"></i>Wishlist</a></li>
                            <li><a href="/!"><i className="icon fa fa-shopping-cart"></i>My Cart</a></li>
                            <li><a href="/!"><i className="icon fa fa-check"></i>Checkout</a></li>
                        </ul>
                    </div>
                    <div className="cnt-block">
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small">
                                <a href="/!" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                    <span className="value">Login</span><b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/!">Register</a></li>
                                    <li><a href="/!">Login</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                        <div className="logo"> <a href="/!">
                                <h1 style={{ color: "white" }}>V_SPLUSH </h1>
                            </a> </div>
                    </div>  
                    <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                        <div className="search-area">
                            {/* <form action="" method="POST"> */}
                                <div className="control-group">
                                    <ul className="categories-filter animate-dropdown">
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="/!category.html">Categories <b className="caret"></b></a>
                                        </li>
                                    </ul>
                                    <input className="search-field" name="keyword_submitted" placeholder="Search here..." />
                                    <a className="search-button" href="/!"></a>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2  top-cart-row">
                        <div className=" dropdown-cart"> <a href="/!" className="lnk-cart">
                                <div className="items-cart-inner">
                                    <div className="basket"><i className="icon fa fa-shopping-cart"></i></div>
                                    <div className="basket-item-count"><span className="count"></span></div>
                                    <div className="total-price-basket"> <span className="lbl"></span> <span className="total-price"> <span className="sign"></span><span className="value"></span> </span> </div>
                                </div>
                            </a>
    
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="header-nav animate-dropdown">
            <div className="container">
                <div className="yamm navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    </div>
                    <div className="nav-bg-class">
                        <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                            <div className="nav-outer">
                                <ul className="nav navbar-nav">
                                    <li className="active dropdown yamm-fw"> <a href="/!" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Home</a> </li>
    
                                    <li className="dropdown hidden-sm"> <a href="/!">Products</a> </li>
    
                                    <li className="dropdown"> <a href="/!">Contact us</a> </li>
                                    <li className="dropdown"> <a href="/!">Order purchased</a> </li>
    
                                    <li className="dropdown  navbar-right special-menu"> <a href="/!#">Todays offer</a> </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </header>
    )
}
export default Header;