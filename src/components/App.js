import SearchInput from "./SearchInput.js";
import SingleMoviePage from "./SingleMoviePage.js";
import MovieGenresSection from "./Home/MovieGenresSection.js";

function App(movies) {
  const html = String.raw;

  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const input = document.querySelector(".search_input");
  var movieSection;

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "movies_container");

  // queries
  const mediaQuerySmall = window.matchMedia("(min-width: 200px)");

  const mediaQueryMedium = window.matchMedia("(min-width: 600px)");

  const mediaQueryMaxMedium = window.matchMedia("(max-width: 600px)");

  const mediaQueryLarge = window.matchMedia("(min-width: 1024px)");

  SearchInput({
    movies,
    movieSection,
    movieSection,
    moviesContainer,
    main,
    header,
    input,
    html,
  });

  // **************************************************GENRES

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
    mediaQueryLarge
  );
  const AZ = new MovieGenresSection(
    "AZ",
    movies,
    movieSection,
    main,
    header,
    input,
    "rating",
    mediaQuerySmall,
    mediaQueryMedium,
    mediaQueryMaxMedium,
    mediaQueryLarge
  );
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
    mediaQueryLarge
  );

  SingleMoviePage(
    movies,
    movieSection,
    main,
    header,
    input,
    moviesContainer
  );
}

// Dont need, already rendering in the async function
// App();

export default App;
