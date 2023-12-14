import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import Web3 from "web3";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Staking({
  XBIT_Pool_Token_Address,
  XBIT_pool_Token_Abi,
  XBIT_Pool_Staking_Address,
  XBIT_Pool_Staking_ABI,
  decimals,
  pool,
  Text,
}) {
  const { address } = useAccount();
  const [selectDays, setselectDays] = useState(1);
  const [Active, setActive] = useState(0);
  const [getValue, setgetValue] = useState(null);
  const [spinner, setspinner] = useState(false);
  const [balance, setbalance] = useState(0);
  const [referal, setReferal] = useState("");
  const [copied, setCopied] = useState(false);
  const [totalStaked_Value, settotalStaked_Value] = useState(0);
  const [Users_Value, setUsers_Value] = useState(0);
  const [UserReferalReward, setUserReferalReward] = useState(0);

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

            let stakingValue;
            if (decimals == 1000000000000000000) {
              stakingValue = webSupply.utils.toWei(getValue.toString());
            } else {
              stakingValue = getValue * Number(decimals);
            }
            let checkbalance = balance * Number(decimals);
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
                toast.success(`${Text} Token Staked Successfull.`);
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
      blanceOf = blanceOf / Number(decimals);
      blanceOf = blanceOf.toString();
      blanceOf = blanceOf.slice(0, 15);
      setbalance(parseFloat(blanceOf).toFixed(2));
    }
  };

  const ReadFuc = async () => {
    try {
      let tokenContractOf = new webSupply.eth.Contract(
        XBIT_Pool_Staking_ABI,
        XBIT_Pool_Staking_Address
      );
      if (address) {
        let UserReferalReward = await tokenContractOf.methods
          .UserReferalReward(address)
          .call();
        UserReferalReward = UserReferalReward / 1000000000000000000;
        setUserReferalReward(UserReferalReward);
        let Users = await tokenContractOf.methods.Users(address).call();
        Users = Users.DepositeToken;
        // console.log("UserReferalReward",Users);
        setUsers_Value(Users / decimals);
      }
      let totalStaked = await tokenContractOf.methods.totalStaked().call();
      settotalStaked_Value(totalStaked / decimals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ReadFuc();
    checkBalance();
    if (address) {
      setReferal(`${window.location.origin}/?ref=${address}`);
    } else {
      setReferal("connect wallet");
    }
  }, [address]);

  return (
    <div className="">
      <div className="row">
        <div className="col-4 p-1 mt-3 mt-md-0">
          <div className="about_box">
            <h3>Total value locked </h3>
            <p>
              {totalStaked_Value} {Text}{" "}
            </p>
          </div>
        </div>
        <div className="col-4 p-1 mt-3 mt-md-0">
          <div className="about_box">
            <h3>personal total staked </h3>
            <p>{Users_Value}</p>
          </div>
        </div>
        <div className="col-4 p-1 mt-3 mt-md-0">
          <div className="about_box">
            <h3>Refferal reward </h3>
            <p>{UserReferalReward}</p>
          </div>
        </div>
      </div>
      <h4 className="dash mt-3 mt-lg-3 text-center">{pool}</h4>
      <div className="take_content mt-3">
        <div className="row justify-content-center my-4">
          <div className="col-md-3 col-4 p-1">
            <div
              className="stke_planes"
              onClick={() => (setselectDays(30), setActive(3))}
              style={{
                background:
                  Active == 3
                    ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                    : "transparent",
              }}
            >
              <button className="days_plan">30 days</button>
              <div className="about_plan">
                <p className="mb-0 Return_inner">5% Return</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-4 p-1">
            <div
              className="stke_planes"
              onClick={() => (setselectDays(60), setActive(2))}
              style={{
                background:
                  Active == 2
                    ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                    : "transparent",
              }}
            >
              <button className="days_plan">60 days</button>
              <div className="about_plan">
                <p className="mb-0">15% Return</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-4 p-1">
            <div
              className="stke_planes"
              onClick={() => (setselectDays(90), setActive(1))}
              style={{
                background:
                  Active == 1
                    ? "linear-gradient(98.76deg, rgb(56, 195, 207) 0%, rgb(135, 103, 211) 100%)"
                    : "transparent",
              }}
            >
              <button className="days_plan">90 days</button>
              <div className="about_plan">
                <p className="mb-0">20% Return</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-12 mb-2">
            <div className="text-white d-flex justify-content-between mb-1">
              <p className="mb-0 abt_para">Stake amount</p>
              <p className="AvailableBalnce abt_para">
                Available Amount {balance} {Text == "XBIT" ? "XBIT" : "USDT"}
              </p>
            </div>
            <div className="inputMax">
              <input
                type="number"
                placeholder={0}
                defaultValue=""
                onChange={(e) => setgetValue(e.target.value)}
                value={getValue}
              />
              <button
                type="button"
                className="btn-common"
                onClick={() =>
                  balance == 0 ? 0 : setgetValue(Number(balance) - Number(0.01))
                }
              >
                MAX
              </button>
            </div>
            {/* <p className="tax mt-1">2% Tax on Deposits</p> */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <button className="app_stk_btn" onClick={staking_Amount}>
              {spinner ? "Loading..." : " approve & stake"}
            </button>
          </div>
        </div>
        <div className="User_Dashboard_main">
          <h4 className="dash mt-1 mt-lg-0">Refer and earn 10% in XBIT</h4>
          <div className="col-md-12">
            {/* <p className="mb-0 text-white abt_para">
                  Enter Your Refferal Address
                </p> */}
            <div className="inputMax">
              <input
                type="text"
                className="refferal_input"
                placeholder={0}
                defaultValue={referal}
                value={referal}
              />
              <CopyToClipboard
                text={referal}
                onCopy={() => {
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              >
                <button
                  type="button"
                  className="btn-common"
                  style={{ width: "5rem" }}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            </div>
            {/* <input type="text" className="ref_add" name="" id="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
