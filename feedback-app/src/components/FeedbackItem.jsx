import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="item-header">
        <span></span>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color="#494949" className="icon"></FaTimes>
        </button>
      </div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
