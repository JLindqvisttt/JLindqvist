import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav className="bg-dark">
        <NavLink to='/'>
          <img src={require('../images/transparant.png')} alt='logo' width="70vh"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About me
          </NavLink>
          <NavLink to='/services' activeStyle>
            Resume
          </NavLink>
        </NavMenu>
        <NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;