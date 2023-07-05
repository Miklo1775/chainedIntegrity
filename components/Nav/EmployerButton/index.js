import { useState } from "react";
import EmployerDropdown from "./EmployerDropdown/EmployerDropdown";
import classes from "./EmployerButton.module.css";

const EmployerButton = ({ user, setDropdown, dropdown }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const { name, role } = user.user;
  const dropdownHandler = () => {
    if (dropdown !== "employer") {
      setDropdown("employer");
    } else {
      setDropdown("");
    }
  };

  const closeDropdown = () => {
    setDropdown("");
  };

  console.log(dropdown, "dropdown");

  return (
    <div className={classes.employerBtnContainer}>
      <button className={classes.employerBtn} onClick={dropdownHandler}>
        {user.userIn && role === "employer" ? `Welcome, ${name}!` : "Employers"}
      </button>
      {dropdown === "employer" && <EmployerDropdown role={role} userIn={user.userIn} closeDropdown={closeDropdown} />}
    </div>
  );
};

export default EmployerButton;
