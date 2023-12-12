import React from "react";
import TABS_stake from "../TABS_stake/TABS_stake";
import Staking from "../Staking/Staking";
import { XBIT_Pool_Staking_ABI, XBIT_Pool_Staking_Address, XBIT_Pool_Token_Address, XBIT_pool_Token_Abi } from "../../utilies/constant";

export default function Xbit_pool() {
  return (
    <div>
      <div className="content_landing">

        <Staking
            XBIT_Pool_Token_Address={XBIT_Pool_Token_Address}
            XBIT_Pool_Staking_Address={XBIT_Pool_Staking_Address}
            XBIT_pool_Token_Abi={XBIT_pool_Token_Abi}
            XBIT_Pool_Staking_ABI={XBIT_Pool_Staking_ABI}
          />
        {/* <TABS_stake /> */}
      </div>
    </div>
  );
}
