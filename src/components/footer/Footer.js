import React from "react";
import styles from "./Footer.module.scss";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>&copy; {year} All Rights Reserved</footer>
  );
};

export default Footer;
