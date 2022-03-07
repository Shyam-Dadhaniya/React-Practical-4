import React from "react";
import styled from "styled-components";

const HeaderDateStyle = styled.div`
  display: flex;
  margin: 0.5em;
  text-align: center;
`;

const MonthYear = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  margin: 0px;
`;
const DateStyle = styled.div`
  margin: 0px 2px 0px 0px;
  padding: 0px;
  font-size: 2.4rem;
  color: black;
  font-weight: 400;
`;

const MonthStyle = styled.div`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  
`;

const YearStyle = styled.div`
  color: grey;
  font-weight: 400;
  font-size: 1rem;
`;

const HeaderDate = () => {
  const today = new Date();
  const date = String(today.getDate()).padStart(2, "0");
  const month = String(today.toLocaleString("default", { month: "short" }));
  const year = today.getFullYear();
  return (
    <HeaderDateStyle>
      <DateStyle>{date}</DateStyle>
      <MonthYear>
        <MonthStyle>{month}</MonthStyle>
        <YearStyle>{year}</YearStyle>
      </MonthYear>
    </HeaderDateStyle>
  );
};

export default HeaderDate;
