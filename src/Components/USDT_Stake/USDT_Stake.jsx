import React from "react";
import "./USDT_Stake.css";

export default function USDT_Stake() {
  return (
    <div className="MAin_usdt_page">
      <div className="row">
        <div className="col-4 p-1 mt-3 mt-md-0">
          <div className="about_box">
            <h3>Total value locked </h3>
            <p>0BCASH</p>
          </div>
        </div>
        <div className="col-4 p-1 mt-3 mt-md-0">
          <div className="about_box">
            <h3>personal total staked </h3>
            <p>0BCASH</p>
          </div>
        </div>
        <div className="col-4 p-1 mt-3 mt-md-0">
          <div className="about_box">
            <h3>Refferal reward </h3>
            <p>0BCASH</p>
          </div>
        </div>
      </div>
      <h4 className="mt-4"> Stake Xbit</h4>
      <div className="d-flex justify-content-between text-white">
        <p className="mb-0">Amount [Min: 1 Xbit]</p>
        <p className="mb-0">~My balance: 0</p>
      </div>
      <div className="usdt_pool_ap">
        <div className="usdt_tk">XBIT Token</div>{" "}
        <input type="number" placeholder="0" className="usdt_in" />
        <div>
          <button className="USDT_MAX">MAX</button>
        </div>
      </div>
      <h6 className="text-white mt-3">Locking Time</h6>
      <div className="row justify-content-center my-4">
        <div className="col-md-3 col-4 p-1">
          <div className="stke_planes">
            <button className="days_plan">90 days</button>
            <div className="about_plan">
              <p className="mb-0">10% APY</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-4 p-1">
          <div className="stke_planes">
            <button className="days_plan">60 days</button>
            <div className="about_plan">
              <p className="mb-0">10% APY</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-4 p-1">
          <div className="stke_planes">
            <button className="days_plan">30 days</button>
            <div className="about_plan">
              <p className="mb-0">10% APY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app_stk_btn"> STAKE</div>
    </div>
  );
}
