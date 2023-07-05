import Link from "next/link";
import classes from "./EmployerDropdown.module.css";

const EmployerDropdown = ({ closeDropdown, userIn, role }) => {
  return (
    <>
      {role !== "employer" && (
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
      )}
      {userIn && role === "employer" && (
        <ul className={classes.employerDropdownContainer}>
          <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
            <Link href="/account-info">Account Info</Link>
          </li>
          <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
            <Link href="/company-info">Company Info</Link>
          </li>
          <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
            <Link href="/jobs/post-a-job">Post a Job</Link>
          </li>
          <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
            <Link href="">Find a Candidate</Link>
          </li>
          <li className={classes.employerDropdownListContainer} onClick={closeDropdown}>
            <Link href="">Messages</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default EmployerDropdown;
