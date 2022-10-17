import { useParams } from "react-router-dom";
import useFetch from "../components/Hooks/useFetch";
import AnimeDetailed from "../components/AnimeDetailed/AnimeDetailed";
import Spinner from "../components/Loading/Spinner";
const AnimeDetails = () => {
  const { animeId } = useParams();
  const [data, error, isLoading] = useFetch(
    `https://api.jikan.moe/v4/anime/${animeId}/full`
  );
  const { data: animeInfo } = data;
  return (
    <section className="anime-details">
      {isLoading && !error && <Spinner size="4rem"></Spinner>}
      {animeInfo["mal_id"] ||
        (animeInfo["mal_id"] !== 0 && (
          <AnimeDetailed data={animeInfo}></AnimeDetailed>
        ))}
    </section>
  );
};
export default AnimeDetails;
