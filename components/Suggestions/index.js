import SuggestionsForm from "./SuggestionsForm";
import classes from "./Suggestions.module.css";
const SuggestionsComponent = () => {
  return (
    <div className={classes.suggestionsContainer}>
      <SuggestionsForm />
    </div>
  );
};

export default SuggestionsComponent;
