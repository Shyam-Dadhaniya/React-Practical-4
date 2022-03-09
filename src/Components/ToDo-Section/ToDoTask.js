import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import ToDOTaskStyle from "../../styled/ToDo/taskStyle";

const ToDoTask = (props) => {
  const [isCompleted, setisCompeleted] = useState(false);
  const completedHandler = () => {
    setisCompeleted(!isCompleted);
  };
  return (
    <IconContext.Provider
      value={{ className: isCompleted ? "complete" : "not-complete" }}
    >
      <ToDOTaskStyle>
        <div style={isCompleted ? { color: "#c2c2c2" } : { color: "#000000" }}>
          {props.data}
        </div>
        <div onClick={completedHandler}>
          {isCompleted ? <FaRegCheckCircle /> : <FaRegCircle />}
        </div>
      </ToDOTaskStyle>
    </IconContext.Provider>
  );
};

export default ToDoTask;
