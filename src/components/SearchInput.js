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
}) {
  function toTitleCase(inputValue) {
    return inputValue.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  input.addEventListener(
    "keyup",
    function captureInput(e) {
      const inputValue = e.target.value;
      e.target.value = toTitleCase(this.value);

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
