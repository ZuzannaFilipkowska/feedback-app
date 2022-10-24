import { useState } from "react";

function RatingSelect({ onSelect }) {
  const [selected, setSelected] = useState(0);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    onSelect(+e.currentTarget.value)
  };

  return (
    <div className="select-rating">
      <h4>Select rating</h4>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <li key={`num${num}`}>
            <input
              type="radio"
              name="rating"
              className="select-rating-input"
              id={`num${num}`}
              value={num}
              onChange={handleChange}
              checked={selected === num}
            />
            <label htmlFor={`num${num}`}>{num}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingSelect;
