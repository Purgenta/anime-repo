import "./App.css";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Spinner from "./components/Loading/Spinner";
import Header from "./components/Header/Header";
const AnimeSearch = lazy(() => import("./pages/AnimeSearch"));
const AnimeDetails = lazy(() => import("./pages/AnimeDetails"));
const Reroute = lazy(() => import("./pages/Reroute"));
const App = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Header />,
        document.querySelector("#main-header")
      )}
      <Routes>
        <Route
          path="/welcome"
          element={
            <Suspense fallback={<Spinner />}>
              <Welcome></Welcome>
            </Suspense>
          }
        ></Route>
        <Route
          path="/trending"
          element={
            <Suspense fallback={<Spinner></Spinner>}>
              <Spinner></Spinner>
            </Suspense>
          }
        >
          <Route path="/trending/anime-of-the-week"></Route>
        </Route>
        <Route
          path={`/search-anime/:name`}
          element={
            <Suspense fallback={<Spinner />}>
              <AnimeSearch></AnimeSearch>
            </Suspense>
          }
        ></Route>
        <Route
          path="/anime-details/:animeId"
          element={
            <Suspense fallback={<Spinner />}>
              <AnimeDetails></AnimeDetails>
            </Suspense>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <Suspense fallback={<Spinner></Spinner>}>
              <Reroute></Reroute>
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
