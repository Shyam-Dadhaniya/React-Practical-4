import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import "./ToDoTask.css"
const ToDOTaskStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
`;

const ToDoCompleted = styled.div``;
const ToDoTask = (props) => {
  const [isCompleted, setisCompeleted] = useState(false);
  const completedHandler = () => {
    setisCompeleted(!isCompleted);
  };
  return (
    <IconContext.Provider value={{ className: isCompleted?"complete":"not-complete" }}>
    <ToDOTaskStyle>
      <ToDoCompleted>{props.data}</ToDoCompleted>
      <div onClick={completedHandler}>
        {isCompleted?<FaRegCheckCircle/> : <FaCheckCircle/>}
      </div>
    </ToDOTaskStyle>
    </IconContext.Provider>

  );
};

export default ToDoTask;
