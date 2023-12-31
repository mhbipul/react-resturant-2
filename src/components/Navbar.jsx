import React from "react";
import Logo from "../assets/pizzaLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <Link to={"/"}> Home </Link>
          <Link to={"/menu"}> Menu </Link>
          <Link to={"/contact"}> Contact </Link>
          <Link to={"/about"}> About </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to={"/"}> Home </Link>
        <Link to={"/menu"}> Menu </Link>
        <Link to={"/contact"}> Contact </Link>
        <Link to={"/about"}> About </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
