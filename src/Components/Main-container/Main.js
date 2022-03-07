import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ToDoList from "../ToDo-Container/ToDoList";
import styled from "styled-components";


const ToDoData = [

  {id: 1, data : "Grab some Pizza"},
  {id: 2, data : "Grab some Pizza"},
  {id: 3, data : "Grab some Pizza"},
  {id: 4, data : "Grab some Pizza"},
  {id: 5, data : "Grab some Pizza"},
  {id: 6, data : "Grab some Pizza"},
 ];
 
const MainStyle = styled.div`
    background: #F0EFE9;
    position: relative ;
    background: whitesmoke;
    width: 260px;
    margin: 10em auto;
    padding: 20px 10px;
    color: black;
    box-shadow: -1px -1px 6px 3px rgba(0,0,0,0.1);
  `

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
