import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import cartesi from "../assets/cartesi.jpeg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-3xl mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <span>
            <img src={cartesi} alt="" className="w-8 rounded-full" />
          </span>
          CartesiDB
        </a>
      </div>
      <div className="flex-none">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Navbar;
