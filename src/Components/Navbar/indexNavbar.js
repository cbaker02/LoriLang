import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../images/x.svg";
import { ReactComponent as MenuIcon } from "../../images/hamburger.svg";
import { ReactComponent as Logo } from "../../images/LLL_logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

const IndexNavbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/about" className="navOption">ABOUT</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/contact"  className="navOption">CONTACT</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/calendar" className="navOption">CALENDAR</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    );
  };
  
  export default IndexNavbar;
  



// import Container from 'react-bootstrap/Container';
// import { ReactComponent as Logo } from '../../LLL_logo.svg'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="home">
//             <Logo className="lll logo"/>
//             React-Bootstrap
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {/* <Nav.Link href="#home">Home</Nav.Link> */}
//             <Nav.Link href="about">About</Nav.Link>
//             <Nav.Link href="calendar">Calendar</Nav.Link>
//             <Nav.Link href="contact">Contact</Nav.Link>
//             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;






// import React from "react";
// import { ReactComponent as Logo } from '../../LLL_logo.svg'
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
// } from "./navbar";

// const Navbar = () => {
//     return (
//         <>
//             <Nav>
//                 {/* <img src = {Logo} alt="Lori's Language Lab"/> */}
//                 <Logo className="lll logo" height="100px" />
//                 <Bars />

//                 <NavMenu>
//                     <NavLink to="/about" >
//                         About
//                     </NavLink>
//                     <NavLink to="/calendar" activeStyle>
//                         Calendar
//                     </NavLink>
//                     <NavLink to="/contact" activeStyle>
//                         Contact Us
//                     </NavLink>
//                     {/* <NavLink to="/team" activeStyle>
//                         Teams
//                     </NavLink>
//                     <NavLink to="/blogs" activeStyle>
//                         Blogs
//                     </NavLink>
//                     <NavLink to="/sign-up" activeStyle>
//                         Sign Up
//                     </NavLink> */}
//                     {/* Second Nav */}
//                     {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//                 </NavMenu>
//             </Nav>
//         </>
//     );
// };

// export default Navbar;