import style from "./Overlay.module.css";
import { motion } from "framer-motion";
const overlayAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.5,
    },
  },
};
const Overlay = (props) => {
  return (
    <motion.div
      variants={overlayAnimation}
      className={[style["overlay"]]}
      onClick={props.handler}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {props.children}
    </motion.div>
  );
};
export default Overlay;
