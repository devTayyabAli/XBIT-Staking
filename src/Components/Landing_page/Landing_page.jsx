import React from "react";
import "./Landing_page.css";
import TABS_stake from "../TABS_stake/TABS_stake";
import Xbit_usdt from "../Xbit_usdt/Xbit_usdt";
import Stake_History from "../Stake_History/Stake_History";

export default function Landing_page() {
  return (
    <div className="main_landing">
      <div className="container">
        <h1 className="landing_heading">
          Join BCASH STAKING FARM & Earn a guaranteed 720% APY
        </h1>

        <Xbit_usdt />
      </div>
    </div>
  );
}
