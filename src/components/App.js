import AZ from "./AZ.js";
import CriticallyAcclaimed from "./CriticallyAcclaimed.js";
import New from "./New.js";
import SingleMoviePage from "./SingleMoviePage.js";
import SearchInput from "./SearchInput.js";

function CreateMovieScroll(movies) {
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const input = document.querySelector("#search-input");

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "a-z");
  moviesContainer.setAttribute("class", "movies");
  var movieSection;
  var aZTitle = "A-Z";
  var CriticallyAcclaimedTitle = "Critically Acclaimed";
  var NewTitle = "New";

  SearchInput(
    input,
    moviesContainer,
    body,
    aZTitle,
    movies,
    movieSection,
    main,
    header
  );
  AZ(aZTitle, movies, movieSection, main, header);
  CriticallyAcclaimed(
    CriticallyAcclaimedTitle,
    movies,
    movieSection,
    main,
    header
  );
  New(NewTitle, movies, movieSection, main, header);
  SingleMoviePage(movies, movieSection, main, header, input);
}

// Dont need, already rendering in the async function
//    CreateMovieScroll();

export default CreateMovieScroll;
