import Movie from "../Movie.js";
import ShowAllMovies from "../ShowAllMovies.js";

function MovieGenresSection(
  title,
  movies,
  movieSection,
  main,
  header,
  input,
  filterBy,
  mediaQuerySmall,
  mediaQueryMedium,
  mediaQueryMaxMedium,
  mediaQueryLarge,
  banner
) {
  {
    this.title = title;
    this.movies = movies;
    this.movieSection = movieSection;
    this.main = main;
    this.header = header;
    this.input = input;
    this.filterBy = filterBy;
  }

  // *************************************Create movie section
  movieSection = document.createElement("section");
  movieSection.setAttribute("class", "movie-section");

  const dFlex = document.createElement("div");
  dFlex.setAttribute("class", "d-flex");
  dFlex.innerHTML = `
  <h2>${title}</h2>
  <button id="${title}" class="seeAll">See All</button>
  `;
  movieSection.appendChild(dFlex);

  // *************************************Create movie section

  // *************************************Create movie container
  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "critically-acclaimed");
  moviesContainer.setAttribute("class", "movies_container");
  // ************************************Create movie container

  // returns movies that matches the filterBy category
  const thisMovies = movies
    .filter((movie) => {
      if (filterBy === "rating") {
        if (movie[filterBy] >= 0) {
          return movie;
        }
      }
      if (filterBy === "popularity") {
        if (movie[filterBy] <= 1000) {
          return movie;
        }
      }
      if (filterBy === "ratingCount") {
        if (movie[filterBy] >= 1800) {
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
  const thisMoviesAll = movies.filter((movie) => {
    if (filterBy === "rating") {
      if (movie[filterBy] >= 0) {
        return movie;
      }
    }
    if (filterBy === "popularity") {
      if (movie[filterBy] <= 1000) {
        return movie;
      }
    }
    if (filterBy === "ratingCount") {
      if (movie[filterBy] >= 1800) {
        return movie;
      }
    }
  });
  // ****************************Find Movies

  // *************************************Append Movies to main
  moviesContainer.innerHTML = thisMoviesContent;
  movieSection.appendChild(moviesContainer);
  main.appendChild(movieSection);
  // *************************************Append Movies to main

  // *********************************************
  // selectors (END OF SCRIPT)
  const seeAllBtn = document.querySelector("#" + title);

  // show all movies when see all btn is clicked
  seeAllBtn.addEventListener(
    "click",
    () => {
      seeAllBtn.classList.add("hide");
      new ShowAllMovies(
        thisMoviesAll,
        main,
        movieSection,
        moviesContainer,
        header,
        input,
        mediaQuerySmall,
        mediaQueryMedium,
        mediaQueryMaxMedium,
        mediaQueryLarge,
        banner,
        seeAllBtn
      );
    },
    false
  );
}

export default MovieGenresSection;
