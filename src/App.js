import Banner from "../src/components/Home/Banner.js";
import SearchInput from "../src/components/SearchInput.js";
import SingleMoviePage from "../src/components/SingleMoviePage.js";
import MovieGenresSection from "../src/components/Home/MovieGenresSection.js";
import Sidebar from "../src/components/Sidebar.js";
import MoviesList from "../src/hooks/apiCalls.js";
import "../src/styles/index.scss";

// Invokes App at end
async function App() {
  const apiPackageResponse = await MoviesList();
  const { movieList, genres } = apiPackageResponse;
  console.log(movieList);

  var movieSection;

  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const banner = document.querySelector(".banner");
  const input = document.querySelector(".search_input");

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "movies_container");

  // queries
  const mediaQuerySmall = window.matchMedia("(min-width: 200px)");
  const mediaQueryMaxSmall = window.matchMedia("(max-width: 400px)");
  const mediaQueryMedium = window.matchMedia("(min-width: 600px)");
  const mediaQueryMaxMedium = window.matchMedia("(max-width: 600px)");
  const mediaQueryLarge = window.matchMedia("(min-width: 1024px)");

  // Components
  Sidebar(
    body,
    movieList,
    genres,
    main,
    movieSection,
    moviesContainer,
    header,
    input,
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge,
    banner
  );

  Banner(
    header,
    banner,
    movieList,
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge
  );

  SearchInput({
    movieList,
    movieSection,
    moviesContainer,
    main,
    header,
    input,
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge,
    banner,
  });

  // **************************************************GENRES

  const All = new MovieGenresSection(
    "All",
    movieList,
    movieSection,
    main,
    header,
    input,
    "rating",
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge,
    banner
  );

  const New = new MovieGenresSection(
    "New",
    movieList,
    movieSection,
    main,
    header,
    input,
    "ratingCount",
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge,
    banner
  );

  const CriticallyAcclaimed = new MovieGenresSection(
    "critically-acclaimed",
    movieList,
    movieSection,
    main,
    header,
    input,
    "popularity",
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge,
    banner
  );

  All.createMovieSection();
  New.createMovieSection();
  CriticallyAcclaimed.createMovieSection();

  SingleMoviePage(
    movieList,
    movieSection,
    main,
    header,
    input,
    moviesContainer,
    banner
  );
}
App();
// document.addEventListener("DOMContentLoaded", App, false);

