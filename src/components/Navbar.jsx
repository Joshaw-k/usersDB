import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-3xl mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">StudentDB</a>
      </div>
      <div className="flex-none">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Navbar;
