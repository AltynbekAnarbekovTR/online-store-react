import React from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Reset</h2>
          <form action="">
            <input type="text" placeholder="Email" required />
            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>{" "}
            <div className={styles.links}>
              <Link to="/login">- Login</Link>
              <Link to="/register">- Register </Link>
            </div>
          </form>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={resetImg} width="400" alt="Reset Password" />
      </div>
    </section>
  );
};

export default Login;
