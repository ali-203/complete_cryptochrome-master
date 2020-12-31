import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./StakeData.css";

const StakeData = () => {
  return (
    <div className="stakeDataContainer">
      <div className="stakeHeader">
      <div>
        <img src={headerLogo} height="35" />
        <h2>UNCX</h2>
        </div>
        <div>
        <img src={headerLogo} height="35" />
        <h2>WETH</h2>
        </div>
      </div>
      <div className="stakeDes">
        <p>You need UniV2 liquidity tokens to farm this pool</p>
      </div>
      <div className="stakeFooter">
        <i className="fa fa-paw" aria-hidden="true"></i>
        <p>Get liquidity tokens</p>
      </div>
      <hr />

      

      <div  className="first-div">
        <div className="available">
        <p>Available to stake</p>
        <h2>0 UNIv2</h2>
        <p>$ 0</p>
        </div>
        <button className="stake-button">Stake</button>
      </div>
      <hr />
      <div className="second-div">
      <div className="icon-div">
      <i class="fa fa-grav" aria-hidden="true"></i>
      <p>Your pool share: <p className="number">0.01%</p> </p>
      </div>
      <button>Add more liquidity</button>
      
      <div className="third-div">
        <p>Staking</p>
        <h2>0.015471961 UNIv2</h2>
        <button className="withdraw">Withdraw</button>
        <p>$ 7</p>
      </div>
      <hr />
      <div className="forth-div">
        <p>Unclaimed rewards</p>
        <div className="uncl-logo">
        <img src={headerLogo} height="35" />
        <h2>UNCL</h2>
        <p>Wallet balance:</p>
        </div>
        <div className="digit">
        <h2>0.0106160</h2>
        </div>
      </div>
      <button className="ending-button">Harvest</button>
      <hr />

      </div>
    </div>
      
    
  );
};

export default StakeData;
