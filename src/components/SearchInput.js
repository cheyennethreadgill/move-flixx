import Movie from "./Movie.js";
import SingleMoviePage from "./SingleMoviePage.js";
import ShowAllMovies from "./ShowAllMovies.js";

function SearchInput({
  movies,
  movieSection,
  moviesContainer,
  newMoviesContainer,
  main,
  header,
  input,
  html,
}) {
  input.addEventListener(
    "keyup",
    function captureInput(e) {
      let inputValue = e.target.value;

      const foundMovies = movies.filter((movie) => {
        const { title } = movie;

        if (title.includes(inputValue)) {
          return movie;
        }
      });
      console.log(foundMovies);

      main.replaceChildren();
      moviesContainer.innerHTML = foundMovies
        .map((movie) => {
          return Movie(movie);
        })
        .join("");
      main.appendChild(moviesContainer);

      document
        .querySelector(".movies_movie")
        .addEventListener(
          "click",
          SingleMoviePage(
            movies,
            movieSection,
            main,
            header,
            input,
            html,
            moviesContainer,
            newMoviesContainer
          ),
          false
        );
    },
    false
  );
}

export default SearchInput;
