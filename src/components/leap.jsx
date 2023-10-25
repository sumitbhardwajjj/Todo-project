import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addto } from "./Slice";
import Remove from "./RemoveTo";
import { add } from "./Slice";
import "../styles/leap.css";
import Todo from "./Todo";

const Leap = () => {
  const dispatch = useDispatch();

  const [num, setnum] = useState("");
  const [input, setinput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (num.length < 4) {
      alert("Invalid field");
    } else if ((0 == num % 4 && 0 != num % 100) || 0 == num % 400) {
      dispatch(Addto(`${num} is leap year`));
    } else {
      dispatch(Addto(`${num} is an Ordinary year`));
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(add(input));
    } else {
      alert("Write Something");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-2">
          <input
            value={num}
            onChange={(e) => setnum(e.target.value)}
            placeholder="Enter the year"
            type="number"
          />
          <button type="submit">Enter</button>
        </div>
      </form>
      <div>
        <Remove />
      </div>
      <form onSubmit={handleForm} className="form">
        <div className="form-2">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Enter the text"
            type="text"
          />
          <button type="submit">Enter</button>
        </div>
      </form>
      <div>
        <Todo />
      </div>
    </div>
  );
};

export default Leap;
