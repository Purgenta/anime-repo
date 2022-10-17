import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={style["main-nav"]}>
      <ul className={style["navigation-menu"]}>
        <li className={style["navigation-menu__link"]}>
          <NavLink to={"/welcome"}>Home</NavLink>
        </li>
        <li className={style["navigation-menu__link"]}>
          <NavLink>Anime News</NavLink>
        </li>
        <li className={style["navigation-menu__link"]}>
          <NavLink>Anime Statistics</NavLink>
        </li>
        <li className={style["navigation-menu__link"]}>
          <NavLink>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
