import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleSubmit }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  const handleSelect = (rating) => {
    setRating(rating);
  };

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMsg(null);
    }
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text: text,
      rating: rating,
    };
    handleSubmit(newFeedback);
    setText('')
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect onSelect={handleSelect}> </RatingSelect>
        <div className="inputGroup">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
