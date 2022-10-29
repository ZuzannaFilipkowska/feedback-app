import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
