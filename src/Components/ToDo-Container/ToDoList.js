
import ToDoTask from "./ToDoTask";
import styled from "styled-components";

const ToDoListStyle = styled.div`
display: flex;
flex-direction: column;
height: 250px;
overflow-y: auto;
-ms-overflow-style: none;
scrollbar-width: none;
`

 
const ToDoList = (props) => {
  return (
    <ToDoListStyle>
       {props.data.map((dummy) => (<ToDoTask key= {dummy.id} id= {dummy.id} data={dummy.data}/>))}
    </ToDoListStyle>
  );
};

export default ToDoList;
