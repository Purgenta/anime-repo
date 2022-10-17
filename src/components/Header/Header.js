import SearchBar from "../Inputs/SearchBar";
import style from "./Header.module.css";
import Navbar from "../Navbars/Navbar";
import Sidenav from "../Navbars/Sidenav";
import { createPortal } from "react-dom";
import { useState } from "react";
const Header = (props) => {
  const [sideNav, setSideNav] = useState(false);
  const sideNavToggleHanddler = () => {
    setSideNav((prev) => !prev);
  };
  return (
    <>
      {createPortal(
        <Sidenav
          key="side-nav"
          handler={sideNavToggleHanddler}
          sideNav={sideNav}
        />,
        document.getElementById("overlay-root")
      )}
      <SearchBar></SearchBar>
      <button
        onClick={sideNavToggleHanddler}
        className={style["hamburger-nav__toogle"]}
      >
        <svg viewBox="0 0 100 80" width="25" height="25">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>
      <Navbar></Navbar>
    </>
  );
};
export default Header;
