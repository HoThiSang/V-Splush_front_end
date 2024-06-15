import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosService from "../services/configAxios";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { Search } from "../components";

function Header() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [activeMenu, setActiveMenu] = useState("home");

  console.log(currentUser);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axiosService.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      });

      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setCurrentUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="header-style-1">
      <div className="top-bar animate-dropdown">
        <div className="container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                <li>
                  <Link to="/!">
                    <i className="icon fa fa-heart"></i>Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/carts">
                    <i className="icon fa fa-shopping-cart"></i>My Cart
                  </Link>
                </li>

                {currentUser === null || currentUser === "" ? (
                  <>
                    <li>
                      <Link to="/register">
                        <i className="icon fa fa-check"></i>Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <i className="icon fa fa-check"></i>Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/profile-user">
                        <i className="icon fa fa-check"></i>My Profile
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleLogout} to="/login">
                        <i className="icon fa fa-check"></i>Logout
                      </Link>
                    </li>
                  </>
                )}
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
                </Link>{" "}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
              <div className="search-area">
                <div className="control-group">
                  <ul className="categories-filter animate-dropdown">
                    <li className="dropdown">
                      <Link
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        to="/!"
                      >
                        Categories <b className="caret"></b>
                      </Link>
                    </li>
                  </ul>
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-nav animate-dropdown">
        <div className="container">
          <div className="yamm navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                data-target="#mc-horizontal-menu-collapse"
                data-toggle="collapse"
                className="navbar-toggle collapsed"
                type="button"
              >
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
            </div>
            <div className="nav-bg-class">
              <div
                className="navbar-collapse collapse"
                id="mc-horizontal-menu-collapse"
              >
                <div className="nav-outer">
                  <ul className="nav navbar-nav">
                    <li
                      className={
                        activeMenu === "home"
                          ? "active dropdown yamm-fw"
                          : "dropdown yamm-fw"
                      }
                    >
                      <Link
                        to="/"
                        data-hover="dropdown"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={() => setActiveMenu("home")}
                      >
                        Home
                      </Link>
                    </li>

                    <li
                      className={
                        activeMenu === "products"
                          ? "active dropdown"
                          : "dropdown"
                      }
                    >
                      <Link
                        to="/products"
                        onClick={() => setActiveMenu("products")}
                      >
                        Products
                      </Link>
                    </li>

                    <li
                      className={
                        activeMenu === "blog" ? "active dropdown" : "dropdown"
                      }
                    >
                      <Link to="/blog" onClick={() => setActiveMenu("blog")}>
                        Blogs
                      </Link>
                    </li>

                    <li
                      className={
                        activeMenu === "contact"
                          ? "active dropdown"
                          : "dropdown"
                      }
                    >
                      <Link
                        to="/contact-us"
                        onClick={() => setActiveMenu("contact")}
                      >
                        Contact us
                      </Link>
                    </li>

                    <li
                      className={
                        activeMenu === "about" ? "active dropdown" : "dropdown"
                      }
                    >
                      <Link
                        to="/about-us"
                        onClick={() => setActiveMenu("about")}
                      >
                        About us
                      </Link>
                    </li>

                    <li
                      className={
                        activeMenu === "offer"
                          ? "active dropdown navbar-right special-menu"
                          : "dropdown navbar-right special-menu"
                      }
                    >
                      <Link to="/!#" onClick={() => setActiveMenu("offer")}>
                        Todays offer
                      </Link>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
