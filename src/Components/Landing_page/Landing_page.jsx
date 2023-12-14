import React from "react";
import "./Landing_page.css";
import TABS_stake from "../TABS_stake/TABS_stake";
import Xbit_usdt from "../Xbit_usdt/Xbit_usdt";
import Stake_History from "../Stake_History/Stake_History";

export default function Landing_page() {
  return (
    <div className="main_landing">
      <div className="overlay"></div>
      <div className="container ">
        <div className="">
          <h1 class="heading heading--accent header-04__heading  text-white">
            {" "}
            $XBIT - Empowering Your Financial Freedom
          </h1>
          <div class="header-04__text content_box  text-white">
            <h2>
              <strong>
                Imagine a utility token that actually has utility{" "}
              </strong>
            </h2>
          </div>
        </div>

        <Xbit_usdt />
      </div>
    </div>
  );
}
