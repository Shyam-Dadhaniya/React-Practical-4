import React from "react";
import styled from "styled-components";

const HeaderDayStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
  margin: 0.5em;
  font-size: 1em;
  text-align: center;
  color: black;
  font-weight: 400;
`;

const HeaderDay = () => {
  const CurrentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  }).toUpperCase();
  return <HeaderDayStyle>{CurrentDay}</HeaderDayStyle>;
};

export default HeaderDay;
