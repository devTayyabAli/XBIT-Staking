import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Xbit_pool from "../Xbit_pool/Xbit_pool";
import USDT_Stake from "../USDT_Stake/USDT_Stake";
import Staking from "../Staking/Staking";
import "./Xbit_usdt.css"
import {
  XBIT_Pool_Staking_ABI,
  XBIT_Pool_Staking_Address,
  XBIT_Pool_Token_Address,
  XBIT_USDT_pool_Staking_Abi,
  XBIT_USDT_pool_Staking_Address,
  XBIT_USDT_pool_Token_Abi,
  XBIT_USDT_pool_Token_Address,
  XBIT_pool_Token_Abi,
} from "../../utilies/constant";
import Stake_History from "../Stake_History/Stake_History";
import Footer from "../Footer/Footer";

// import "./TABS_stake.css";

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

export default function Xbit_usdt() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }} className="pb-5">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tab-css"
          >
            <Tab label="Xbit pool" {...a11yProps(0)} />
            <Tab label="USDT/Xbit pool" {...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="row justify-content-center ">
            <div className="col-md-6">
              <div className="landing_content_box">
                <div className="landing_head">
                  <div className="content_landing">
                    <Staking
                      XBIT_Pool_Token_Address={XBIT_Pool_Token_Address}
                      XBIT_pool_Token_Abi={XBIT_pool_Token_Abi}
                      XBIT_Pool_Staking_Address={XBIT_Pool_Staking_Address}
                      XBIT_Pool_Staking_ABI={XBIT_Pool_Staking_ABI}
                      decimals={1000000000000000000}
                      pool="Stake XBIT get XBIT"
                      Text={"XBIT"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Stake_History
            XBIT_Pool_Staking_Address={XBIT_Pool_Staking_Address}
            XBIT_Pool_Staking_ABI={XBIT_Pool_Staking_ABI}
            decimals={1000000000000000000}
          />
            <Footer />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="landing_content_box">
                <div className="landing_head">
                  <div className="content_landing">
                    <Staking
                      XBIT_Pool_Token_Address={XBIT_USDT_pool_Token_Address}
                      XBIT_pool_Token_Abi={XBIT_USDT_pool_Token_Abi}
                      XBIT_Pool_Staking_Address={XBIT_USDT_pool_Staking_Address}
                      XBIT_Pool_Staking_ABI={XBIT_USDT_pool_Staking_Abi}
                      decimals={1000000}
                      pool="Stake USDT get XBIT"
                      Text={"USDT"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Stake_History
          XBIT_Pool_Staking_Address={XBIT_USDT_pool_Staking_Address}
          XBIT_Pool_Staking_ABI={XBIT_USDT_pool_Staking_Abi}
          decimals={1000000}
          />
            <Footer />


        </CustomTabPanel>
      </Box>
    </div>
  );
}
