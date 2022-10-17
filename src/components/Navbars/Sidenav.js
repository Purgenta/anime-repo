import Overlay from "../Overlay/Overlay";
import style from "./Sidenav.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const navBarAnimation = {
  hidden: {
    left: "-100vw",
  },
  visible: {
    x: "100vw",
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 14,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.3,
    },
  },
};
const linksAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Sidenav = (props) => {
  return (
    <AnimatePresence mode="wait">
      {props.sideNav && (
        <Overlay key="overlay" handler={props.handler}>
          <motion.aside
            variants={navBarAnimation}
            exit="exit"
            initial="hidden"
            animate="visible"
            className={style["aside-nav"]}
            onClick={(event) => event.stopPropagation()}
          >
            <motion.nav variants={linksAnimation} className="nav">
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
            </motion.nav>
          </motion.aside>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
export default Sidenav;
