import { useState } from "react";
import EmployerDropdown from "./EmployerDropdown/EmployerDropdown";
import classes from "./EmployerButton.module.css";
const EmployerButton = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };
  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  return (
    <div className={classes.employerBtnContainer}>
      <button className={classes.employerBtn} onClick={dropdownHandler}>
        Employers
      </button>
      {openDropdown && <EmployerDropdown closeDropdown={closeDropdown} />}
    </div>
  );
};

export default EmployerButton;
