import classes from "./Links.module.css";
import { useState } from "react";
import EmployerButton from "../EmployerButton";
import SeekerButton from "../SeekerButton";
const Links = () => {
  return (
    <div className={classes.linksContainer}>
      <EmployerButton />
      <SeekerButton />
    </div>
  );
};

export default Links;
