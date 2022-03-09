import ToDoTask from "./ToDoTask";
import ToDoListStyle from "../../styled/ToDo/listStyle";

const ToDoList = (props) => {
  return (
    <ToDoListStyle>
      {props.data.map((dummy) => (
        <ToDoTask key={dummy.id} id={dummy.id} data={dummy.data} />
      ))}
    </ToDoListStyle>
  );
};

export default ToDoList;
