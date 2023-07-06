import classes from "./SignupForm.module.css";

const EmployerSignup = ({ setEmployerInfo, employerInfo }) => {
  const handleInput = (e, input) => {
    switch (input) {
      case "fName":
        setEmployerInfo({ ...employerInfo, first: e.target.value });
        break;
      case "lName":
        setEmployerInfo({ ...employerInfo, last: e.target.value });
        break;
      case "mid":
        setEmployerInfo({ ...employerInfo, middle: e.target.value });
        break;
      case "city":
        setEmployerInfo({ ...employerInfo, city: e.target.value });
        break;
      case "state":
        setEmployerInfo({ ...employerInfo, state: e.target.value });
        break;
      case "zipcode":
        setEmployerInfo({ ...employerInfo, zipcode: e.target.value });
        break;
      case "company":
        setEmployerInfo({ ...employerInfo, company: e.target.value });
        break;
      case "address":
        setEmployerInfo({ ...employerInfo, companyAddress: e.target.value });
        break;
      case "email":
        setEmployerInfo({ ...employerInfo, companyEmail: e.target.value });
        break;
      case "phone":
        setEmployerInfo({ ...employerInfo, companyPhone: e.target.value });
        break;
      default:
        return;
    }
  };
  return (
    <>
      <div className={classes.inputContainer}>
        <label htmlFor="fName">First: </label>
        <input type="text" id="fName" onChange={(e) => handleInput(e, "fName")} value={employerInfo.first} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="mName">Middle: </label>
        <input type="text" id="mName" onChange={(e) => handleInput(e, "mid")} value={employerInfo.middle} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="lName">Last: </label>
        <input type="text" id="lName" onChange={(e) => handleInput(e, "lName")} value={employerInfo.last} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" onChange={(e) => handleInput(e, "city")} value={employerInfo.city} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="state">State: </label>
        <input type="text" id="state" onChange={(e) => handleInput(e, "state")} value={employerInfo.state} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="zipcode">Zipcode: </label>
        <input type="text" id="zipcode" onChange={(e) => handleInput(e, "zipcode")} value={employerInfo.zipcode} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="company">Company: </label>
        <input type="text" id="company" onChange={(e) => handleInput(e, "company")} value={employerInfo.company} />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="companyAddress">Company Address: </label>
        <input
          type="text"
          id="companyAddress"
          onChange={(e) => handleInput(e, "address")}
          value={employerInfo.companyAddress}
        />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="companyEmail">Company Email: </label>
        <input
          type="text"
          id="companyEmail"
          onChange={(e) => handleInput(e, "email")}
          value={employerInfo.companyEmail}
        />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="companyPhone">Company Phone: </label>
        <input
          type="text"
          id="companyPhone"
          onChange={(e) => handleInput(e, "phone")}
          value={employerInfo.companyPhone}
        />
      </div>
    </>
  );
};

export default EmployerSignup;
