import "./App.css";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    setFeedback(feedback.filter((el) => el.id !== id));
  };

  const handleAdd = (newFeedback) => {
    feedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleSubmit={handleAdd} />
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
          feedback={feedback}
          handleDelete={handleDelete}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;
