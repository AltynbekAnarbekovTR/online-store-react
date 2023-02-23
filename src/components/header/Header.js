import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaStore } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logoImg from "../../assets/logo.png";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <FaStore size={28} color="greenyellow" />
      <h2>
        Buy<span>Buy</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? styles.active : "");

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          >
            {" "}
          </div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              {<FaTimes size={22} />}
            </li>

            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="/order-history" className={activeLink}>
                My Orders
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
