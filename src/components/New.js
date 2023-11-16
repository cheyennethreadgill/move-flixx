import Movie from "./Movie.js";
import ShowAllMovies from "./ShowAllMovies.js";

function New(NewTitle, movies, movieSection, main, header, input) {
  // *********************************************
  movieSection = document.createElement("section");
  movieSection.setAttribute("class", "movie-section");

  const dFlex = document.createElement("div");
  dFlex.setAttribute("class", "d-flex");
  dFlex.innerHTML = `
    <h2>${NewTitle}</h2>
    <button id="new" class="seeAll">See All</button>
  `;
  movieSection.appendChild(dFlex);

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "new");
  moviesContainer.setAttribute("class", "movies_container");

  // New
  const New = movies
    .filter((movie) => {
      if (movie.ratingCount >= 1800) {
        return movie;
      }
    })
    .slice(0, 6);

  const NewAll = movies.filter((movie) => {
    if (movie.ratingCount >= 1800) {
      return movie;
    }
  });

  const NewContent = New.map((movie) => {
    return Movie(movie);
  }).join("");

  moviesContainer.innerHTML = NewContent;
  movieSection.appendChild(moviesContainer);
  main.appendChild(movieSection);

  // *********************************************
  // see all
  const seeAllBtn = document.querySelector("#new");
  seeAllBtn.addEventListener(
    "click",
    () => {
      seeAllBtn.classList.add("hide");
      new ShowAllMovies(
        seeAllBtn,
        NewAll,
        main,
        movieSection,
        moviesContainer,
        header,
        input
      );
    },
    false
  );
}

export default New;
