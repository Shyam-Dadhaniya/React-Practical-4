import React from "react";
import { FiPlus } from "react-icons/fi";
import styled from "styled-components";

const ButtonClick = styled.div`
display: flex ;
  position: absolute ;
  border-radius: 50% ;
  left: 0 ;
  right: 0;
  margin: 0 auto ;
  width: 3rem;
  height: 3rem ;
  background-color: #51E4A6 ;
  justify-content: center;
  align-items: center;
  font-size: 2rem ;
  bottom: -23px ;
  color: gray ;

 &:hover{
   background-color: green ;
   color: lightblue ;
 }
`;
const Footer = () => {
  return (
    <ButtonClick>
      <FiPlus />
    </ButtonClick>
  );
};
export default Footer;
