import style from "./AnimeItem.module.css";
import { motion } from "framer-motion";
const animeDetailsAnimation = {
  hover: {
    scale: 1.1,
  },
};
const AnimeItem = (props) => {
  const { webp } = props.images;
  const { from, to } = props.aired;
  const fromYear = new Date(from).getFullYear();
  let toYear = !to ? "" : `- ${new Date(to).getFullYear()}`;
  const shortenedTitle = props.title.split(" ").slice(0, 3).join(" ");
  return (
    <li className={style["anime-search__result"]}>
      <img
        src={webp[`image_url`]}
        alt="anime search result "
        loading="lazy"
        className={style["result-image"]}
      />
      <p className="anime-search__result__score">⭐ {props.score}</p>
      <h2 className={style["anime-search__result__title"]}>{shortenedTitle}</h2>
      <h3
        className={style["anime-search__result__aired"]}
      >{`${fromYear} ${toYear}`}</h3>
      <motion.button
        variants={animeDetailsAnimation}
        whileHover="hover"
        className={style["more-details"]}
      >
        Details
      </motion.button>
    </li>
  );
};
export default AnimeItem;
