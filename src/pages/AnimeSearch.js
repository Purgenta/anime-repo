import AnimeList from "../components/AnimeList/AnimeList";
import { useState } from "react";
import useFetch from "../components/Hooks/useFetch";
import Spinner from "../components/Loading/Spinner";
import { useParams } from "react-router-dom";
const AnimeSearch = () => {
  const { name } = useParams();
  const [data, error, isLoading] = useFetch(
    ` https://api.jikan.moe/v4/anime?q=${name}`
  );
  const [searchOptions, setSearchOptions] = useState("");
  let { data: animeData } = data;
  switch (searchOptions) {
    case "score": {
      animeData.sort((a, b) => {
        return b.score - a.score;
      });
      break;
    }
    case "popularity": {
      animeData = [
        ...animeData
          .filter((anime) => anime.popularity > 0)
          .sort((a, b) => a - b),
        ...animeData.filter((anime) => anime.popularity === 0),
      ];
      break;
    }
    case "episodes": {
      animeData.sort((a, b) => b.episodes - a.episodes);
      break;
    }
    default: {
      break;
    }
  }
  return (
    <section className="anime-search">
      {isLoading && <Spinner size="5rem"></Spinner>}
      {error && <p>There has been an error proccesing your request</p>}
      {!isLoading && !error && (
        <AnimeList
          animeData={animeData}
          name={name}
          setSearchOptions={setSearchOptions}
        ></AnimeList>
      )}
    </section>
  );
};
export default AnimeSearch;
