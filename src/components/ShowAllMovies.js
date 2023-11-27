import Movie from "./Movie.js";
import SingleMoviePage from "./SingleMoviePage.js";

// show AZ page
function ShowAllMovies(
  // seeAllBtn,
  movies,
  main,
  movieSection,
  moviesContainer,
  header,
  input,
  mediaQuerySmall,
  mediaQueryMedium,
  mediaQueryMaxMedium,
  mediaQueryLarge,
  banner
) {
  {
    // this.seeAllBtn = seeAllBtn;
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

  // *********************************************QUERIES
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

  // //   -----------------------------desktop
  // const handleDesktopChange = (e) => {
  //   if (e.matches) {
  //     moviesContainer.style.cssText =
  //       "grid-template-columns: repeat(5, 240px);";
  //   }
  // };
  // handleDesktopChange(mediaQueryXL);
  // mediaQueryXL.addListener(handleDesktopChange);

  // inject new content
  moviesContainer.innerHTML = allMoviesContent;
  main.appendChild(moviesContainer);

  SingleMoviePage(
    movies,
    movieSection,
    main,
    header,
    input,
    moviesContainer,
    banner
  );
}

export default ShowAllMovies;
