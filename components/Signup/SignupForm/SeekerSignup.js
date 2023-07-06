const SeekerSignup = ({ setSeekerInfo, seekerInfo }) => {
  const handleInput = (e, input) => {
    switch (input) {
      case "fName":
        setSeekerInfo({ ...seekerInfo, first: e.target.value });
        break;
      case "lName":
        setSeekerInfo({ ...seekerInfo, last: e.target.value });
        break;
      case "mid":
        setSeekerInfo({ ...seekerInfo, middle: e.target.value });
        break;
      case "city":
        setSeekerInfo({ ...seekerInfo, city: e.target.value });
        break;
      case "state":
        setSeekerInfo({ ...seekerInfo, state: e.target.value });
        break;
      case "zipcode":
        setSeekerInfo({ ...seekerInfo, zipcode: e.target.value });
        break;
      case "cEmployer":
        setSeekerInfo({ ...seekerInfo, currentEmployer: e.target.value });
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div>
        <label htmlFor="fName">First: </label>
        <input type="text" id="fName" onChange={(e) => handleInput(e, "fName")} value={seekerInfo.first} />
      </div>
      <div>
        <label htmlFor="mName">Middle: </label>
        <input type="text" id="mName" onChange={(e) => handleInput(e, "mid")} value={seekerInfo.middle} />
      </div>
      <div>
        <label htmlFor="lName">Last: </label>
        <input type="text" id="lName" onChange={(e) => handleInput(e, "lName")} value={seekerInfo.last} />
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" onChange={(e) => handleInput(e, "city")} value={seekerInfo.city} />
      </div>
      <div>
        <label htmlFor="state">State: </label>
        <input type="text" id="state" onChange={(e) => handleInput(e, "state")} value={seekerInfo.state} />
      </div>
      <div>
        <label htmlFor="zipcode">Zipcode: </label>
        <input type="text" id="zipcode" onChange={(e) => handleInput(e, "zipcode")} value={seekerInfo.zipcode} />
      </div>
      <div>
        <label htmlFor="cEmployer">Current Employer: </label>
        <input
          type="text"
          id="cEmployer"
          onChange={(e) => handleInput(e, "cEmployer")}
          value={seekerInfo.currentEmployer}
        />
      </div>
    </>
  );
};

export default SeekerSignup;
