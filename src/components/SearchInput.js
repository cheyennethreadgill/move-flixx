import Movie from "./Movie.js";
import SingleMoviePage from "./SingleMoviePage.js";
import ShowAllMovies from "./ShowAllMovies.js";
import Banner from "./Home/Banner.js";

function SearchInput({
  movies,
  movieSection,
  moviesContainer,
  main,
  header,
  input,
  mediaQuerySmall,
  mediaQueryMedium,
  mediaQueryMaxMedium,
  mediaQueryLarge,
  banner,
}) {
  // change input to title case
  function toTitleCase(inputValue) {
    return inputValue.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  input.addEventListener(
    "keyup",
    function captureInput(e) {
      // capture input value, set it to helper title case function
      const inputValue = e.target.value;
      e.target.value = toTitleCase(this.value);

      // return found movies
      const foundMovies = movies.filter((movie) => {
        const { title } = movie;

        if (title.includes(inputValue)) {
          return movie;
        }
      });

      // remove existing children in dom
      main.replaceChildren();
      //   replace with filter movies
      moviesContainer.innerHTML = foundMovies
        .map((movie) => {
          return Movie(movie);
        })
        .join("");
      main.appendChild(moviesContainer);

      // resize movies container here
      // ***********************************QUERIES
      //   -----------------------------Phone
      // handles width change
      const handlePhoneChange = (e) => {
        if (e.matches) {
          moviesContainer.style.cssText =
            "grid-template-columns: repeat(2, 153px); justify-content: center;";
        }
      };
      // injetcs the query into the function
      handlePhoneChange(mediaQuerySmall);
      // listens for width change
      mediaQuerySmall.addListener(handlePhoneChange);

      //   -----------------------------Tablet
      const handleTabletChange = (e) => {
        if (e.matches) {
          moviesContainer.style.cssText =
            "grid-template-columns: repeat(4, 216px);";
        }
      };
      handleTabletChange(mediaQueryMedium);
      mediaQueryMedium.addListener(handleTabletChange);

      //   -----------------------------laptop
      const handleLaptopChange = (e) => {
        if (e.matches) {
          moviesContainer.style.cssText =
            "grid-template-columns: repeat(5, 232px);";
        }
      };
      handleLaptopChange(mediaQueryLarge);
      mediaQueryLarge.addListener(handleLaptopChange);

      // once movie is clicked, create single movie page with parsed information
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
            banner
          ),
          false
        );
    },
    false
  );
}

export default SearchInput;
