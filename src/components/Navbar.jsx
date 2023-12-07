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
        <h1>ConnectWallet</h1>
      </div>
    </div>
  );
};

export default Navbar;
