import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-style-1">
            <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                            <ul className="list-unstyled">
                                <li><Link to="/!"><i className="icon fa fa-heart"></i>Wishlist</Link></li>
                                <li><Link to="/carts"><i className="icon fa fa-shopping-cart"></i>My Cart</Link></li>
                                <li><Link to="/checkout"><i className="icon fa fa-check"></i>Checkout</Link></li>
                                <li><Link to="/register"><i className="icon fa fa-check"></i>Register</Link></li>
                                <li><Link to="/login"><i className="icon fa fa-check"></i>Login</Link></li>
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
                            <div className="logo">
                                <Link to="/">
                                    <h1 style={{ color: "white" }}>V_SPLUSH </h1>
                                </Link> </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                            <div className="search-area">
                                {/* <form action="" method="POST"> */}
                                <div className="control-group">
                                    <ul className="categories-filter animate-dropdown">
                                        <li className="dropdown">
                                            <Link className="dropdown-toggle" data-toggle="dropdown" to="/!category.html">Categories <b className="caret"></b></Link>
                                        </li>
                                    </ul>
                                    <input className="search-field" name="keyword_submitted" placeholder="Search here..." />
                                    <Link className="search-button" to="/!"></Link>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2  top-cart-row">
                            <div className=" dropdown-cart"> <Link to="/!" className="lnk-cart">
                                <div className="items-cart-inner">
                                    <div className="basket"><i className="icon fa fa-shopping-cart"></i></div>
                                    <div className="basket-item-count"><span className="count"></span></div>
                                    <div className="total-price-basket"> <span className="lbl"></span> <span className="total-price"> <span className="sign"></span><span className="value"></span> </span> </div>
                                </div>
                            </Link>
    
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
                                    <li className="active dropdown yamm-fw"> <Link to="/" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Home</Link> </li>
    
                                    <li className="dropdown hidden-sm"> <Link to="/products">Products</Link> </li>
    
                                    <li className="dropdown"> <Link to="/!">Contact us</Link> </li>
                                    <li className="dropdown"> <Link to="/!">Order purchased</Link> </li>

                                        <li className="dropdown  navbar-right special-menu"> <Link to="/!#">Todays offer</Link> </li>
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