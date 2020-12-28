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
        <p>Avaiable to stake</p>
        <h2>0 UNIv2</h2>
        <p>$ 0</p>
        <button>stake</button>
        <hr />
      </div>


      <div className="second-div">
      <div className="icon-div">
      <i class="fa fa-clone" aria-hidden="true"></i>
      <button>Add more liquidity</button>
      <p>Your pool share</p>
      </div>
      <div className="third-div">
        <h5>Staking</h5>
        <h2>0.015471961 UNIv2</h2>
        <p>$ 7</p>
      </div>

      </div>











      

    </div>

    

    
   

    
    
  );
};

export default StakeData;