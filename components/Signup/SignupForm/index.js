import SeekerSignup from "./SeekerSignup";
import EmployerSignup from "./EmployerSignup";
import { useState } from "react";
import { useRouter } from "next/router";

import classes from "./SignupForm.module.css";

const SignupForm = () => {
  const router = useRouter();
  const query = router.query.signupUser;
  const [employerInfo, setEmployerInfo] = useState({
    first: "",
    middle: "",
    last: "",
    city: "",
    state: "",
    zipcode: "",
    company: "",
    companyAddress: "",
    companyEmail: "",
    companyPhone: "",
  });
  const [seekerInfo, setSeekerInfo] = useState({
    first: "",
    middle: "",
    last: "",
    city: "",
    state: "",
    zipcode: "",
    currentEmployer: "",
  });

  const signupFormHandler = (e) => {
    e.preventDefault();
    console.log(employerInfo);
    if (query === "seeker") {
      setSeekerInfo({
        first: "",
        middle: "",
        last: "",
        city: "",
        state: "",
        zipcode: "",
        currentEmployer: "",
      });
    }

    if (query === "employer") {
      setEmployerInfo({
        first: "",
        middle: "",
        last: "",
        city: "",
        state: "",
        zipcode: "",
        company: "",
        companyAddress: "",
        companyEmail: "",
        companyPhone: "",
      });
    }
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={signupFormHandler}>
        {query === "seeker" && <SeekerSignup setSeekerInfo={setSeekerInfo} seekerInfo={seekerInfo} />}
        {query === "employer" && <EmployerSignup setEmployerInfo={setEmployerInfo} employerInfo={employerInfo} />}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
