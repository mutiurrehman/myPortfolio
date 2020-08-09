import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export const NavbarComponent = () => {
  return (
    <div>
      <Navbar light expand="fixed-top">
        <NavbarBrand href="/" className="pl-5">
          <img src="logo.png" alt="MUTIUR" />
          <b>Code </b> Eat Sleep Repeat{" "}
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
