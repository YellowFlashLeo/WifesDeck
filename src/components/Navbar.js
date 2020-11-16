import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import SearchBox from "./coomon/searchBox";
import { ProductConsumer, ProductProvider } from "../context";

const NavBar = () => {
  return (
    <NavWrapper className="navbar navbar-extend-sm navbar-dark px-sm-5">
      {/* <React.Fragment>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
        </React.Fragment>
        <React.Fragment>
          <NavLink className="nav-item nav-link" to="/profile">
            {user.name}
          </NavLink>
          <NavLink className="nav-item nav-link" to="/logout">
            Logout
          </NavLink>
        </React.Fragment>*/}
      <Link to="/">
        <h6>
          <WiMoonAltWaningCrescent4 />
        </h6>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Cards
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default NavBar;
