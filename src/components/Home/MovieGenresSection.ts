import Movie from "../Movie";
import ShowAllMovies from "../ShowAllMovies";

interface SingleMovieInterface {
  rating: number;
  popularity: number;
  ratingCount: number;
}

interface MovieGenresSectionInterface {
  title: string;
  movies: [];
  movieSection: Element;
  main: Element;
  header: Element;
  input: Element;
  filterBy: string;
  mediaQuerySmall: MediaQueryList;
  mediaQueryMedium: MediaQueryList;
  mediaQueryMaxMedium: MediaQueryList;
  mediaQueryLarge: MediaQueryList;
  banner: Element;
  rating: number;
}

class MovieGenresSection {
  title: string;
  movies: [];
  movieSection: Element;
  main: Element;
  header: Element;
  input: Element;
  filterBy: string;
  mediaQuerySmall: MediaQueryList;
  mediaQueryMedium: MediaQueryList;
  mediaQueryMaxMedium: MediaQueryList;
  mediaQueryLarge: MediaQueryList;
  banner: Element;

  constructor(
    title: string,
    movies: [],
    movieSection: Element,
    main: Element,
    header: Element,
    input: Element,
    filterBy: string,
    mediaQuerySmall: MediaQueryList,
    mediaQueryMedium: MediaQueryList,
    mediaQueryMaxMedium: MediaQueryList,
    mediaQueryLarge: MediaQueryList,
    banner: Element
  ) {
    this.title = title;
    this.movies = movies;
    this.main = main;
    this.header = header;
    this.input = input;
    this.filterBy = filterBy;
    this.mediaQuerySmall = mediaQuerySmall;
    this.mediaQueryMedium = mediaQueryMedium;
    this.mediaQueryMaxMedium = mediaQueryMaxMedium;
    this.mediaQueryLarge = mediaQueryLarge;
    this.banner = banner;
  }

  // ***********************************************METHOD
  createMovieSection() {
    // *****************************************************Create movie section
    const movieSection = document.createElement("section");
    movieSection.setAttribute("class", `movie-section ${this.title}`);
    // movieSection.setAttribute("class", "movie-section");

    const dFlex = document.createElement("div");
    dFlex.classList.add("container", "d-flex");
    dFlex.innerHTML = `
      <h2>${this.title}</h2>
      <button id="${this.title}" class="seeAll">See All</button>
  `;
    // -------------------------------------------------------Append movie section
    movieSection.appendChild(dFlex);

    // *******************************Create movie section

    // *****************************************************Create movie container
    const moviesContainer = document.createElement("section");
    moviesContainer.setAttribute("class", "movies_container");
    // ************************************Create movie container

    // returns movies that matches the filterBy category
    const thisMovies = this.movies
      .filter((movie) => {
        if (this.filterBy === "rating") {
          if (movie[this.filterBy] >= 0) {
            return movie;
          }
        }
        if (this.filterBy === "popularity") {
          if (movie[this.filterBy] <= 1000) {
            return movie;
          }
        }
        if (this.filterBy === "ratingCount") {
          if (movie[this.filterBy] >= 1800) {
            return movie;
          }
        }
      })
      .slice(0, 6);

    // returns movie card for filtered movies
    const thisMoviesContent = thisMovies
      .map((movie) => {
        return Movie(movie);
      })
      .join("");

    // returns ALL movies based on filterby query
    const thisMoviesAll = this.movies.filter((movie: SingleMovieInterface) => {
      if (this.filterBy === "rating") {
        if (movie[this.filterBy] >= 0) {
          return movie;
        }
      }
      if (this.filterBy === "popularity") {
        if (movie[this.filterBy] <= 1000) {
          return movie;
        }
      }
      if (this.filterBy === "ratingCount") {
        if (movie[this.filterBy] >= 1800) {
          return movie;
        }
      }
    });
    // ****************************Find Movies

    // ******************************************************Append Movies to main
    moviesContainer.innerHTML = thisMoviesContent;
    movieSection.appendChild(moviesContainer);
    this.main.appendChild(movieSection);

    // // *************************************Append Movies to main

    // // *********************************************
    // // selectors (END OF SCRIPT)
    const seeAllBtn = document.querySelector("#" + this.title);

    // show all movies when see all btn is clicked
    seeAllBtn.addEventListener(
      "click",
      () => {
        seeAllBtn.classList.add("hide");
        new (ShowAllMovies as any)(
          thisMoviesAll,
          this.main,
          this.movieSection,
          moviesContainer,
          this.header,
          this.input,
          this.mediaQuerySmall,
          this.mediaQueryMedium,
          this.mediaQueryMaxMedium,
          this.mediaQueryLarge,
          this.banner,
          seeAllBtn
        );
      },
      false
    );
  }
}
export default MovieGenresSection;

