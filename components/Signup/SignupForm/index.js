import SeekerSignup from "./SeekerSignup";
import { useState } from "react";
import { useRouter } from "next/router";

const SignupForm = () => {
  const [employerInfo, setEmployerInfo] = useState({});
  const [seekerInfo, setSeekerInfo] = useState({
    first: "",
    middle: "",
    last: "",
    city: "",
    state: "",
    zipcode: 0,
    currentEmployer: "",
  });
  const router = useRouter();
  const query = router.query.signupUser;

  const signupFormHandler = (e) => {
    e.preventDefault();
    console.log(seekerInfo);
    setSeekerInfo({
      first: "",
      middle: "",
      last: "",
      city: "",
      state: "",
      zipcode: "",
      currentEmployer: "",
    });
  };

  return (
    <>
      <form onSubmit={signupFormHandler}>
        {query === "seeker" && <SeekerSignup setSeekerInfo={setSeekerInfo} seekerInfo={seekerInfo} />}
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default SignupForm;
