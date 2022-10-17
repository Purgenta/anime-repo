import { useRef } from "react";
import style from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
const SearchBar = (props) => {
  const navigation = useNavigate();
  const searchRef = useRef();
  const searchSubmitHandler = (event) => {
    event.preventDefault();
    navigation(`/search-anime/${searchRef.current.value}`);
    searchRef.current.value = "";
  };
  return (
    <div className={style[`anime-search`]}>
      <form onSubmit={searchSubmitHandler}>
        <div className={style["anime-search__controls"]}>
          <span>🔍</span>
          <input type="text" placeholder="Insert anime name" ref={searchRef} />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
