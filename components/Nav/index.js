import Title from "./Title";
import Links from "./Links";
import classes from "./Nav.module.css";

const NavbarComponent = () => {
  return (
    <div className={classes.navContainer}>
      <Title />
      <Links />
    </div>
  );
};

export default NavbarComponent;
