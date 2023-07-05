import Link from "next/link";
import classes from "./SeekerDropdown.module.css";

const SeekerDropdown = ({ closeDropdown, userIn, role }) => {
  return (
    <>
      {role !== "candidate" && (
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
      )}
      {role === "candidate" && (
        <ul className={classes.seekerDropdownContainer}>
          <li className={classes.seekerDropdownListContainer}>
            <Link href="/user-profile">Profile</Link>
          </li>
          <li className={classes.seekerDropdownListContainer}>
            <Link href="/jobs">Find a Job</Link>
          </li>
          <li className={classes.seekerDropdownListContainer}>
            <Link href="/messages">Messages</Link>
          </li>
          <li className={classes.seekerDropdownListContainer}>
            <Link href="/documents">Documents</Link>
          </li>
          <li className={classes.seekerDropdownListContainer}>
            <Link href="/application-status">Status</Link>
          </li>
          <li className={classes.seekerDropdownListContainer}>
            <Link href="/site-settings">Site Settings</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default SeekerDropdown;
