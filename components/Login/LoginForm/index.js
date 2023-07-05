import classes from "./LoginForm.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const loginFormHandler = (event) => {
    event.preventDefault();
  };

  console.log(loginData);

  const inputHandler = (e) => {};

  return (
    <div className={classes.loginFormContainer}>
      <form className={classes.LoginForm} onSubmit={loginFormHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
          />
        </div>
        <button>Login</button>
      </form>
      <Link href={`/signup/${router.query.loginUser}`}>Don't have account? Sign up here!</Link>
    </div>
  );
};
export default LoginForm;
