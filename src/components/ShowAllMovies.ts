import Movie from "./Movie";
import SingleMoviePage from "./SingleMoviePage";

// show AZ page
function ShowAllMovies(
  movies: [],
  main: Element,
  movieSection: Element,
  moviesContainer: HTMLElement,
  header: Element,
  input: Element,
  // mediaQuerySmall: MediaQueryList,
  // mediaQueryMedium: MediaQueryList,
  // mediaQueryMaxMedium: MediaQueryList,
  // mediaQueryLarge: MediaQueryList,
  banner: Element,
  seeAllBtn: Element
) {
  {
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
  function handlePhoneChange(query: MediaQueryList) {
    if (query.matches) {
      moviesContainer.style.cssText =
        "grid-template-columns: repeat(2, 153px); justify-content: center;";
    }
  }
  // // injetcs the query into the function
  // handlePhoneChange(mediaQuerySmall);
  // // listens for width change
  // mediaQuerySmall.addListener(handlePhoneChange);

  // //   -----------------------------Tablet
  // function handleTabletChange(query: MediaQueryList): void {
  //   if (query.matches) {
  //     moviesContainer.style.cssText =
  //       "grid-template-columns: repeat(4, 216px);";
  //   }
  // }
  // handleTabletChange(mediaQueryMedium);
  // mediaQueryMedium.addListener(handleTabletChange);

  // //   -----------------------------laptop
  // function handleLaptopChange(query: MediaQueryList): void {
  //   if (query.matches) {
  //     moviesContainer.style.cssText =
  //       "grid-template-columns: repeat(5, 232px);";
  //   }
  // }
  // handleLaptopChange(mediaQueryLarge);
  // mediaQueryLarge.addListener(handleLaptopChange);

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

