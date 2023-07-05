import LoginForm from "./LoginForm";
import classes from "./Login.module.css";

const LoginComponent = () => {
  return (
    <div className={classes.loginContainer}>
      <LoginForm />
    </div>
  );
};

export default LoginComponent;
