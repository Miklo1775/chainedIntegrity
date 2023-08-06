import classes from "./SuggestionsForm.module.css";

const SuggestionsForm = () => {
  return (
    <div className={classes.formContainer}>
      <form>
        <div className={classes.inputContainer}>
          <label>Subject</label>
          <input />
        </div>
        <div className={classes.inputContainer}>
          <label>Name</label>
          <input />
        </div>
        <div className={classes.inputContainer}>
          <label>Improvements:</label>
          <textarea />
        </div>
        <button>Submit Response</button>
      </form>
    </div>
  );
};

export default SuggestionsForm;
