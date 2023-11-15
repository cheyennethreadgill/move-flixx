import Movie from "./Movie.js";
import SingleMoviePage from "./SingleMoviePage.js";

function SearchInput(input, moviesContainer, movies, main) {
  input.addEventListener(
    "keyup",
    function captureInput(e) {
      let inputValue = e.target.value;
      const foundMovie = movies.filter((movie) => {
        const { title } = movie;

        if (title.includes(inputValue)) {
          return movie;
        }
      });

      main.replaceChildren();
      moviesContainer.innerHTML = Movie(foundMovie[0]);
      main.appendChild(moviesContainer);
    },
    false
  );
}

export default SearchInput;
