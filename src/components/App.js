import Banner from "./Home/Banner.js";
import SearchInput from "./SearchInput.js";
import SingleMoviePage from "./SingleMoviePage.js";
import MovieGenresSection from "./Home/MovieGenresSection.js";
import Sidebar from "./Sidebar.js";

const App = (movies, genres) => {
  const html = String.raw;

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
    movies,
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
    movies,
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge
  );

  SearchInput({
    movies,
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

  const New = new MovieGenresSection(
    "New",
    movies,
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
    movies,
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
  const All = new MovieGenresSection(
    "All",
    movies,
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

  SingleMoviePage(
    movies,
    movieSection,
    main,
    header,
    input,
    moviesContainer,
    banner
  );
};

// Dont need, already rendering in the async function
// App();

export default App;
