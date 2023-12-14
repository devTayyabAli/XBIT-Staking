import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import logo from "../Assets/Xbit_logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

export default function Header() {
  const [show, setShow] = useState(false);
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const handleClose = () => setShow(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="main_navbar">
        <Container>
          <Navbar.Brand href="/" className="main_logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <div className='d-flex justify-content-center connect_wallet_btn '>
            <w3m-button className="nav_outer_btn"  />
          </div> */}

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={show ? "show" : ""}
          >
            <Nav className="m-auto">
              <Nav.Link className="main_header_links" href="#">
              Home
              </Nav.Link>
              <Nav.Link className="main_header_links" href="#">
              Buy XBIT
              </Nav.Link>
              <Nav.Link className="main_header_links" href="#">
              Buy USDT
              </Nav.Link>
              <Nav.Link className="main_header_links" href="https://twitter.com/bitagoxbit" target="_blank">
              Twitter
              </Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
          <div className="d-flex justify-content-center  ">
            {/* <button onClick={() => open()} className='connect_wallet_btn'>Connect wallet</button> */}
            {/* <w3m-button
              themeVariables={{
                "--w3m-font-family": "Roboto, sans-serif",
                "--w3m-background-color":"red"
              }}
              className="btn_Inner"
              balance="hide"
            /> */}
            <button
                  onClick={() =>
                    address
                      ? chain?.id == chains[0]?.id
                        ? open()
                        : switchNetwork?.(chains[0]?.id)
                      : open()
                  }
                  className="connect_wallet_btn "
                >
                  {address ? (
                    chain?.id == chains[0]?.id || chain?.id == chains[1]?.id ? (
                      address ? (
                        <>
                          {`${address.substring(0, 6)}...${address.substring(
                            address.length - 4
                          )}`}
                        </>
                      ) : (
                        "connect wallet"
                      )
                    ) : (
                      "Switch NewWork"
                    )
                  ) : (
                    "Connect Wallet"
                  )}
                </button>
          </div>
          <span className="d-block d-lg-none" onClick={() => setShow(!show)}>
            {show ? (
              <>
                <RxCross2 className="text-white fs-1" />{" "}
              </>
            ) : (
              <>
                <AiOutlineMenu className="text-white fs-1" />
              </>
            )}
          </span>
        </Container>
      </Navbar>
    </div>
  );
}
