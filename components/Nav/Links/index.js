import classes from "./Links.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import EmployerButton from "../EmployerButton";
import SeekerButton from "../SeekerButton";
const Links = () => {
  const [dropdown, setDropdown] = useState("");

  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <div className={classes.linksContainer}>
      <EmployerButton user={user} setDropdown={setDropdown} dropdown={dropdown} />
      <SeekerButton user={user} setDropdown={setDropdown} dropdown={dropdown} />
    </div>
  );
};

export default Links;
