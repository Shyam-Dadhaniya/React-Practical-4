import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import ToDOTaskStyle, {TodotaskTitle} from "../../styled/ToDo/taskStyle";

const ToDoTask = (props) => {
  const [isCompleted, setisCompeleted] = useState(false);
  const completedHandler = () => {
    setisCompeleted(!isCompleted);
  };
  return (
   
      <ToDOTaskStyle>
        <TodotaskTitle completed= {isCompleted}>
          {props.data}
        </TodotaskTitle>
        <div onClick={completedHandler}>
          {isCompleted ? <FaRegCheckCircle  style={{color : '#51e4a6'}}/> : <FaRegCircle />}
        </div>
      </ToDOTaskStyle>
    
  );
};

export default ToDoTask;
