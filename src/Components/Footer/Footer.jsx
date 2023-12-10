import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo.png"

export default function Footer() {
  return (
    <div className='main_footer'>
    <div className="container">
        <div className="row align-items-center justify-content-around   ">
            <div className="col-md-4">
                <img src={logo} className='w-50' alt="" />
            </div>
            <div  className="col-md-4 mt-3 mt-md-0">
                <p className='text-white'>© 2022 Binance Cash. All Right Reserved.</p>
            </div>
        </div>
        <p className='text-center text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,  fuga.</p>
    </div>
    </div>
  )
}
