import Link from "next/link";
import classes from "./EmployerDropdown.module.css";

const EmployerDropdown = ({ closeDropdown }) => {
  return (
    <ul className={classes.employerDropdownContainer}>
      <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
        <Link href="/login/employer">Login/SignUp</Link>
      </li>
      <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
        <Link href="/why-us">Why chainedIntegrity?</Link>
      </li>
      <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
        <Link href="/suggestions">Suggestions</Link>
      </li>
    </ul>
  );
};

export default EmployerDropdown;
