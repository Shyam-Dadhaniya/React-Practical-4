import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderDay from "./HeaderDay";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HeaderDate />
        <HeaderDay />
      </HeaderStyle>
    </>
  );
};

export default Header;
