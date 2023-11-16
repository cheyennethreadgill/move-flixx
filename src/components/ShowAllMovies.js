import Movie from "./Movie.js";
import SingleMoviePage from "./SingleMoviePage.js";

// show AZ page
function ShowAllMovies(
  seeAllBtn,
  movies,
  main,
  movieSection,
  moviesContainer,
  header,
  input,
  html
) {
  {
    this.seeAllBtn = seeAllBtn;
    this.movies = movies;
    this.main = main;
    this.movieSection = movieSection;
  }

  const allMoviesContent = movies
    .map((movie) => {
      return Movie(movie);
    })
    .join("");

  // remove children of main section
  main.replaceChildren();
  moviesContainer.style.rowGap = "2em";

  // inject new content
  moviesContainer.innerHTML = allMoviesContent;
  main.appendChild(moviesContainer);

  const newMoviesContainer = document.querySelector(".movies_container");

  SingleMoviePage(
    movies,
    movieSection,
    main,
    header,
    input,
    html,
    newMoviesContainer
  );
}

export default ShowAllMovies;
