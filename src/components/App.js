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
    "popularity"
  );
  const AZ = new MovieGenresSection(
    "AZ",
    movies,
    movieSection,
    main,
    header,
    input,
    "rating"
  );
  const New = new MovieGenresSection(
    "New",
    movies,
    movieSection,
    main,
    header,
    input,
    "ratingCount"
  );

  SingleMoviePage(
    movies,
    movieSection,
    main,
    header,
    input,
    html,
    moviesContainer
  );
}

// Dont need, already rendering in the async function
// App();

export default App;
