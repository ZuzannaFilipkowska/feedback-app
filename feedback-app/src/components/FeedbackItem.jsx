import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="item-header">
        <span></span>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="#494949" className="icon"></FaTimes>
        </button>
        <button className="edit icon" onClick={() => editFeedback(item)}>
          <FaEdit color="#494949"></FaEdit>
        </button>
      </div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
