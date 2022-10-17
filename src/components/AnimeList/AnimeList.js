import { useRef } from "react";
import AnimeItem from "./AnimeItem";
import style from "./AnimeList.module.css";
const AnimeList = (props) => {
  const sortRef = useRef();
  const sortChangeHandler = () => {
    props.setSearchOptions(sortRef.current.value);
  };
  return (
    <>
      <div className={style["search-results__information"]}>
        <h2 className={style["search-results__count"]}>
          Your search results for {props.name}: {props.animeData?.length || 0}
        </h2>
        <div className={style["sort-results"]}>
          <select
            name="sorting-options"
            id="sorting-options"
            ref={sortRef}
            onChange={sortChangeHandler}
          >
            <option value="">Sort search</option>
            <option value="episodes">By number of episodes</option>
            <option value="score">Score</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
      <ul className={style["search-results"]}>
        {props.animeData?.map((anime) => {
          const { mal_id, title, aired, images, score } = anime;
          return (
            <AnimeItem
              key={mal_id}
              id={mal_id}
              title={title}
              aired={aired}
              images={images}
              score={score}
            />
          );
        })}
      </ul>
    </>
  );
};
export default AnimeList;
