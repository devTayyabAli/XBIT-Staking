import React from "react";
// import * as React from 'react';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TABS_stake.css";
import Stake_History from "../Stake_History/Stake_History";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TABS_stake() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tryhere">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Stake" {...a11yProps(0)} />
            {/* <Tab label="unstake" {...a11yProps(1)} /> */}
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="take_content mt-3">
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

            <div className="row">
              <div className="col-12 col-lg-12 mb-4">
              <div className="text-white d-flex justify-content-between mb-1">
                  <p className="mb-0 abt_para">Stake amount</p>
                  <p className="mb-0 abt_para">Available Amount 0 BCASH</p>
                </div>
                <div className="inputMax">
                  <input type="number" placeholder={0} defaultValue="" />
                  <button type="button" className="btn-common">
                    {" "}
                    MAX{" "}
                  </button>
                </div>
                <p className="tax mt-1">2% Tax on Deposits</p>
              </div>

              {/* <div className="col-md-6">
                <div className="text-white d-flex justify-content-between">
                  <p className="mb-0 abt_para">Stake amount</p>
                  <p className="mb-0 abt_para">Available Amount 0 BCASH</p>
                </div>
                <div className="input_stake_amnt">
                  <input
                    type="text"
                    className="input_amount"
                    placeholder="0"
                    name=""
                    id=""
                  />
                  <button className="stke_max">MAX</button>
                </div>
                <p className="tax">2% Tax on Deposits</p>
              </div> */}

            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <button className="app_stk_btn">approve & stake</button>
              </div>
            </div>
            <div className="User_Dashboard_main">
              <h4 className="dash mt-3 mt-lg-0">Refer and earn 12% in XBIT</h4>
              <div className="col-md-12">
                <p className="mb-0 text-white abt_para">
                  Enter Your Refferal Address
                </p>
                <div className="inputMax">
                  <input type="number" placeholder={0} defaultValue="" />
                  <button type="button" className="btn-common">
                    {" "}
                    Copy{" "}
                  </button>
                </div>
                {/* <input type="text" className="ref_add" name="" id="" /> */}
              </div>

            </div>
          </div>
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={1}>
          <div className="unstake_content">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="text-white d-flex justify-content-between mt-4">
                  <p>Unstake Amount</p>
                  <p>Available Amount 0 BCASH</p>
                </div>
                <div className="unstake_box d-flex">
                  <input
                    type="text"
                    placeholder="0"
                    className="unstke_amt"
                    name=""
                    id=""
                  />
                  <button className="stke_max">MAX</button>
                </div>
                <button className="app_stk_btn">unstake</button>
              </div>
            </div>
          </div>
        </CustomTabPanel> */}
      </Box>
    </div>
  );
}
