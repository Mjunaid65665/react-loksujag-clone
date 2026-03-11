
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar navbar-expand-lg" dir={i18n.language === "ur" ? "rtl" : "ltr"}>
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/loksuja-logo.png" alt="logo" />
        </Link>

        {/* Desktop Navlinks */}
        <div className="menu-items">
          <ul className="navbar-nav ms-auto align-items-center d-none d-lg-flex gap-4">

            <li className="nav-item">
              <Link to="/">{t("home")}</Link>
            </li>

            <li className="nav-item">
              <Link to="/community">{t("community")}</Link>
            </li>

            <li className="nav-item">
              <Link to="/videos">{t("videos")}</Link>
            </li>

            {/* Language Buttons */}
            <li className="nav-item">
              <span className="lang-circle" style={{ cursor: "pointer" }}
                onClick={() => i18n.changeLanguage("en")}>
                EN
              </span>
            </li>

            <li className="nav-item hover-color">
              <span style={{ cursor: "pointer" }}
                onClick={() => i18n.changeLanguage("ur")}>
                اردو
              </span>
            </li>

            <li className="nav-item search-icon" onClick={toggleSearch}>
              <FaSearch size={30} color="#686B73" />
            </li>

            {isSearchOpen && (
              <div className="search-input-container">
                <input type="text" placeholder="Search..." className="form-control" />
              </div>
            )}

            <li className="nav-item menu-icon" onClick={toggleMenu}>
              <FaBars size={30} color="#686B73" />
            </li>

          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="d-lg-none ms-auto menu-icon" onClick={toggleMenu}>
          <FaBars size={30} />
        </div>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${menuOpen ? "show" : ""}`}>
        <div className="menu-header">
          <FaTimes size={22} onClick={toggleMenu} />
        </div>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>{t("home")}</Link></li>
          <li><Link to="/videos" onClick={toggleMenu}>{t("videos")}</Link></li>
          <li><Link to="/special-edition" onClick={toggleMenu}>SPECIAL EDITION</Link></li>
          <li><Link to="/home" onClick={toggleMenu}>{t("WRITERS")}</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>ABOUT US</Link></li>
          <li><Link to="/jobs" onClick={toggleMenu}>JOBS</Link></li>
          <li><Link to="/login" onClick={toggleMenu}>LOGINS</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;