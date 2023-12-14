import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../Assets/Xbit_logo.png";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  const [getYear, setGetYear] = useState("2024");
  useEffect(() => {
    const event = new Date();
    const year = event.getFullYear();
    setGetYear(year);
  
  }, []);

  return (
    <div className="main_footer">
      <div className="container">
        <div className="row align-items-center justify-content-around   ">
          <img src={logo} className="w-50" alt="" />
          <div className="social_icons d-flex justify-content-center align-items-center gap-3">
            <a href="https://twitter.com/bitagoxbit" target="_blank">
              <FaTwitter className="icons_soical" />
            </a>
            <a href="https://t.me/bitago" target="_blank">
              <FaTelegramPlane className="icons_soical" />
            </a>
            <a
              href="https://www.instagram.com/bitago.official/"
              target="_blank"
            >
              <FaInstagramSquare className="icons_soical" />
            </a>
            <a
              href="https://www.linkedin.com/company/advertium"
              target="_blank"
            >
              <FaLinkedin className="icons_soical" />
            </a>
          </div>
          {/* <div className='footer_text mt-3'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quos quae at doloribus, dolores quo vitae corporis laboriosam enim iste sunt porro placeat voluptas a vero eum repudiandae! Vitae, in.</p>
        </div> */}

          <p className="text-white text-center  mt-2 mb-0">
            Copyright © Reserved by XBIT {getYear}
          </p>
          {/* <div className="col-md-4">
                <img src={logo} className='w-50' alt="" />
            </div>
            <div  className="col-md-4 mt-3 mt-md-0">
                <p className='text-white'>© 2022 Binance Cash. All Right Reserved.</p>
            </div> */}
        </div>
        {/* <p className='text-center text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,  fuga.</p> */}
      </div>
    </div>
  );
}
