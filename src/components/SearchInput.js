import Movie from "./Movie.js";

function SearchInput(
  moviesContainer,
  body,
  aZTitle,
  movies,
  movieSection,
  main,
  header
) {
  // get input value
  const input = document.querySelector("#search-input");

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
