import React, { useEffect, useState } from "react";
// import * as React from 'react';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TABS_stake.css";
import Stake_History from "../Stake_History/Stake_History";
import { useAccount } from "wagmi";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import toast from "react-hot-toast";
import {
  XBIT_Pool_Token_Address,
  XBIT_pool_Token_Abi,
  XBIT_Pool_Staking_Address,
  XBIT_Pool_Staking_ABI,
} from "../../utilies/constant";
import Web3 from "web3";
import Staking from "../Staking/Staking";

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

  const { address } = useAccount();
  const [selectDays, setselectDays] = useState(1);
  const [Active, setActive] = useState(0);
  const [getValue, setgetValue] = useState(null);
  const [spinner, setspinner] = useState(false);
  const [balance, setbalance] = useState(0);
  const [referal, setReferal] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const webSupply = new Web3("wss://arbitrum-goerli.publicnode.com");

  const staking_Amount = async () => {
    try {
      if (selectDays == 1) {
        toast.error("Please Select Days");
        setspinner(false);
      } else {
        if (getValue == null) {
          toast.error("Please Enter Amount First!");
          setspinner(false);
        } else {
          // if (getValue < 1) {
          //   toast.error("Minimum Staking Amount 1!");
          //   setspinner(false);
          // } else {
          if (!address) {
            toast.error("Please Connect Metamaske First!");
          } else {
            setspinner(true);

            let stakingValue = getValue * 1000000000000000000;
            let checkbalance = balance * 1000000000000000000;
            if (Number(checkbalance) >= Number(stakingValue)) {
              const { request } = await prepareWriteContract({
                address: XBIT_Pool_Token_Address,
                abi: XBIT_pool_Token_Abi,
                functionName: "approve",
                args: [XBIT_Pool_Staking_Address, stakingValue.toString()],
                account: address,
              });
              const { hash } = await writeContract(request);
              const data = await waitForTransaction({
                hash,
              });

              setTimeout(async () => {
                toast.success("Approve Confirmed");
                let UserID;
                if (window.location.href.includes("ref")) {
                  UserID = window.location.href.split("=");
                  UserID = UserID[UserID.length - 1];
                  console.log("refferal", UserID);
                  // setRefAddressfun(UserID);
                } else {
                  UserID = "0x0000000000000000000000000000000000000000";
                }
                console.log("UserID", stakingValue, selectDays, UserID);
                const { request } = await prepareWriteContract({
                  address: XBIT_Pool_Staking_Address,
                  abi: XBIT_Pool_Staking_ABI,
                  functionName: "farm",
                  args: [stakingValue.toString(), selectDays, UserID],
                  account: address,
                });
                const { hash } = await writeContract(request);
                const data = await waitForTransaction({
                  hash,
                });
                toast.success("AKS Token Staked Successfull.");
                setspinner(false);
              }, 1000);
            } else {
              toast.error("Insufficient Balance");
              setspinner(false);
            }
          }
          // }
        }
      }
    } catch (e) {
      console.log("Error", e);
      setspinner(false);
    }
  };

  const checkBalance = async () => {
    let tokenContractOf = new webSupply.eth.Contract(
      XBIT_pool_Token_Abi,
      XBIT_Pool_Token_Address
    );
    if (address) {
      let blanceOf = await tokenContractOf.methods.balanceOf(address).call();
      blanceOf = blanceOf / 1000000000000000000;
      blanceOf = blanceOf.toString();
      blanceOf = blanceOf.slice(0, 15);
      setbalance(blanceOf);
    }
  };

  useEffect(() => {
    checkBalance();
    if (address) {
      setReferal(`${window.location.origin}/?ref=${address}`);
    } else {
      setReferal("connect wallet");
    }
  }, [address]);

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
          {/* <Staking
            XBIT_Pool_Token_Address={XBIT_Pool_Token_Address}
            XBIT_Pool_Staking_Address={XBIT_Pool_Staking_Address}
            XBIT_pool_Token_Abi={XBIT_pool_Token_Abi}
            XBIT_Pool_Staking_ABI={XBIT_Pool_Staking_ABI}
          /> */}
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
