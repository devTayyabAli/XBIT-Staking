import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import logo from "../Assets/logo.png"
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'


export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" className="main_navbar">
      <Container>
        <Navbar.Brand href="#home" className='main_logo'>
            <img src={logo} alt="" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <span className='d-block d-lg-none' onClick={()=>setShow(!show)} >
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span>
        <Navbar.Collapse id="responsive-navbar-nav"  className={show ? "show":""}>
          <Nav className="m-auto">
            <Nav.Link className='main_header_links' href="#features">Withdraw</Nav.Link>
            <Nav.Link className='main_header_links' href="#pricing">Referral</Nav.Link>
            <Nav.Link className='main_header_links' href="#pricing">Migrate</Nav.Link>
            <Nav.Link className='main_header_links' href="#pricing">Buy BCASH</Nav.Link>
           
          </Nav>
          <Nav>
          <div className='d-flex justify-content-center'>
            <button className='connect_wallet_btn'>Connect wallet</button>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
