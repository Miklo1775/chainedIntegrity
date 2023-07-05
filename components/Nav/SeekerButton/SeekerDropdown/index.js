import Link from "next/link";
import classes from "./SeekerDropdown.module.css";

const SeekerDropdown = ({ closeDropdown }) => {
  return (
    <ul className={classes.seekerDropdownContainer}>
      <li className={classes.seekerDropdownListContainer} onClick={closeDropdown}>
        <Link href="/login/seeker">Login/Signup</Link>
      </li>
      <li className={classes.seekerDropdownListContainer} onClick={closeDropdown}>
        <Link href="/jobs">View Jobs</Link>
      </li>
      <li className={classes.seekerDropdownListContainer} onClick={closeDropdown}>
        <Link href="/success">Success</Link>
      </li>
      <li className={classes.seekerDropdownListContainer} onClick={closeDropdown}>
        <Link href="/suggestions">Suggestions</Link>
      </li>
    </ul>
  );
};

export default SeekerDropdown;
