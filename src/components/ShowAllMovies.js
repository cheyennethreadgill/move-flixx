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
  mediaQuerySmall,
  mediaQueryMedium,
  mediaQueryMaxMedium,
  mediaQueryLarge
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
        "grid-template-columns: repeat(4, 216px);";
    }
  };
  handleLaptopChange(mediaQueryLarge);
  mediaQueryLarge.addListener(handleLaptopChange);

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
    moviesContainer,
    newMoviesContainer
  );
}

export default ShowAllMovies;
