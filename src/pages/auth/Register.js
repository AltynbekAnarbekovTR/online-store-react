import React from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form action="">
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
          </form>

          <span className={styles.register}>
            {" "}
            <p>Already have an account?{"  "}</p>&nbsp;
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} width="400" alt="Register" />
      </div>
    </section>
  );
};

export default Login;
