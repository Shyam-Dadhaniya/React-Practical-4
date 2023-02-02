import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderDay from "./HeaderDay";
import HeaderStyle from "../../styled/headerStyle";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div><h1>Header</h1></div>
        <HeaderDate />
        <HeaderDay />
      </HeaderStyle>
    </>
  );
};

export default Header;
