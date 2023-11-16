import SearchInput from "./SearchInput.js";
import AZ from "./AZ.js";
import CriticallyAcclaimed from "./CriticallyAcclaimed.js";
import New from "./New.js";
import SingleMoviePage from "./SingleMoviePage.js";

function App(movies) {
  const html = String.raw;

  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const input = document.querySelector(".search_input");

  var CriticallyAcclaimedTitle = "Critically Acclaimed";
  var aZTitle = "A-Z";
  var NewTitle = "New";
  var movieSection;

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "movies_container");

  SearchInput({movies, movieSection, movieSection, moviesContainer, main, header, input, html});

  AZ(aZTitle, movies, movieSection, main, header, input);

  CriticallyAcclaimed(
    CriticallyAcclaimedTitle,
    movies,
    movieSection,
    main,
    header
  );
  New(NewTitle, movies, movieSection, main, header);

  SingleMoviePage(movies, movieSection, main, header, input, html);

  // Add rating colors after movies are rendered
  const ratingTags = document.querySelectorAll(".movies_movie_text_rating");

  ratingTags.forEach((tag) => {
    if (tag.innerText >= 7) {
      tag.classList.add("green");
    }
    if ((tag.innerText >= 5.4) & (tag.innerText <= 7)) {
      tag.classList.add("orange");
    }
    if ((tag.innerText >= 0) & (tag.innerText <= 5.3)) {
      tag.classList.add("red");
    }
  });
}

// Dont need, already rendering in the async function
//    App();

export default App;
