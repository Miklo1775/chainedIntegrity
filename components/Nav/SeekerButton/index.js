import { useState } from "react";
import { useSelector } from "react-redux";
import SeekerDropdown from "./SeekerDropdown";
import classes from "./SeekerButton.module.css";

const SeekerButton = ({ user, setDropdown, dropdown }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const { name, role } = user.user;

  const dropDownHandler = () => {
    if (dropdown !== "candidate") {
      setDropdown("candidate");
    } else {
      setDropdown("");
    }
  };

  const closeDropdown = () => {
    setDropdown("");
  };

  return (
    <div className={classes.seekerBtnContainer}>
      <button className={classes.seekerBtn} onClick={dropDownHandler}>
        {user.userIn && role === "candidate" ? ` Welcome, ${name}!` : "Seeker"}
      </button>
      {dropdown === "candidate" && (
        <SeekerDropdown
          dropDownHandler={dropDownHandler}
          closeDropdown={closeDropdown}
          role={role}
          userIn={user?.userIn}
        />
      )}
    </div>
  );
};

export default SeekerButton;
