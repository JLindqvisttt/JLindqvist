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
      <Nav>
        <NavLink to='/'>
          <img src={require('../images/transparant.png')} alt='logo' width="70vh"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/About' activeStyle>
            About me
          </NavLink>
          <NavLink to='/Resume' activeStyle>
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;