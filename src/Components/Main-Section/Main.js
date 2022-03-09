import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ToDoList from "../ToDo-Section/ToDoList";
import MainStyle from "../../styled/mainStyle";

const ToDoData = [

  {id: 1, data : "Grab some Pizza"},
  {id: 2, data : "Grab some Pizza"},
  {id: 3, data : "Grab some Pizza"},
  {id: 4, data : "Grab some Pizza"},
  {id: 5, data : "Grab some Pizza"},
  {id: 6, data : "Grab some Pizza"},
  {id: 7, data : "Grab some Pizza"},
  {id: 8, data : "Grab some Pizza"},

 ];
 


function Main() {
  return (
    <MainStyle >
      <Header />
      <ToDoList  data= {ToDoData}/>
      <Footer />
    </MainStyle>
  );
}

export default Main;
