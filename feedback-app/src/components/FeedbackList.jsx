import FeedbackItem from "./FeedbackItem"
import { PropTypes } from 'prop-types';


function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>

  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={(id) => handleDelete(id)}></FeedbackItem>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
}

export default FeedbackList