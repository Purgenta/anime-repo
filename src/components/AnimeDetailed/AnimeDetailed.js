import style from "./AnimeDetailed.module.css";
const AnimeDetailed = (props) => {
  const {
    images: { webp },
    synopsis,
    rank,
    popularity,
    score,
  } = props.data;
  return (
    <div className="detailed-information">
      <div className="anime-image__wrapper">
        <div className={style["anime-image__container"]}>
          <img
            src={webp["large_image_url"]}
            className={style["anime-large__image"]}
            alt="anime large"
          />
          <div className="anime-ratings">
            <h4 className={style["anime-score"]}>🌟{score}</h4>
            <h4 className={style["anime-popularity"]}>
              Popularity ranking: <br />
              {popularity}
            </h4>
            <h4 className={style["anime-rank"]}>
              Rank: <br /> {rank}
            </h4>
          </div>
        </div>
      </div>
      <div className={style["anime-general__information"]}>
        <h2 className={style["anime-title"]}>Content placeholder</h2>
        <h3 className={style["anime-aired"]}></h3>
      </div>
      <p className={style["anime-synopsis"]}>{synopsis}</p>
    </div>
  );
};
export default AnimeDetailed;
