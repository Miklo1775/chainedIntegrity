import { useState } from "react";
import SeekerDropdown from "./SeekerDropdown";
import classes from "./SeekerButton.module.css";

const SeekerButton = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropDownHandler = () => {
    setOpenDropdown(!openDropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };
  return (
    <div className={classes.seekerBtnContainer}>
      <button className={classes.seekerBtn} onClick={dropDownHandler}>
        Seekers
      </button>
      {openDropdown && <SeekerDropdown dropDownHandler={dropDownHandler} closeDropdown={closeDropdown} />}
    </div>
  );
};

export default SeekerButton;
