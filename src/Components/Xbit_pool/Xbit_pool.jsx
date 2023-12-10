import React from "react";
import TABS_stake from "../TABS_stake/TABS_stake";

export default function Xbit_pool() {
  return (
    <div>
      <div className="content_landing">
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
        <TABS_stake />
      </div>
    </div>
  );
}
