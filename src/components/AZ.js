import Movie from "./Movie.js";
import ShowAllMovies from "./ShowAllMovies.js";

// create az section
function AZ(
  aZTitle,
  movies,
  movieSection,
  main,
  header
) {
  // *********************************************
  movieSection =
    document.createElement("section");
  movieSection.setAttribute(
    "class",
    "movie-section"
  );

  const dFlex = document.createElement("div");
  dFlex.setAttribute("class", "d-flex");
  dFlex.innerHTML = `
    <h2>${aZTitle}</h2>
    <button id="a-z" class="seeAll">See All</button>
  `;
  movieSection.appendChild(dFlex);

  const moviesContainer =
    document.createElement("section");
  moviesContainer.setAttribute("class", "a-z");
  moviesContainer.setAttribute("class", "movies");

  // a-z
  const aZArray = movies
    .filter((movie) => {
      if (movie.rating > 0) {
        return movie;
      }
    })
    .slice(0, 6);

  const aZContent = aZArray
    .map((movie) => {
      return Movie(movie);
    })
    .join("");
  moviesContainer.innerHTML = aZContent;
  movieSection.appendChild(moviesContainer);
  main.appendChild(movieSection);

  // *********************************************
  // see all
  const seeAllBtn =
    document.querySelector("#a-z");
  seeAllBtn.addEventListener(
    "click",
    () => {
      seeAllBtn.classList.add("hide");
      new ShowAllMovies(
        seeAllBtn,
        movies,
        main,
        movieSection,
        moviesContainer
      );
    },
    false
  );
}

export default AZ;
