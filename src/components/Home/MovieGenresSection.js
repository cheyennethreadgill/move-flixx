import Movie from "../Movie.js";
import ShowAllMovies from "../ShowAllMovies.js";

function MovieGenresSection(
  title,
  movies,
  movieSection,
  main,
  header,
  input,
  filterBy
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
  console.log(filterBy);

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

  // ****************************Find Movies
  const thisMovies = movies
    .filter((movie) => {
      if (movie[filterBy] > 0) {
        return movie;
      }
    })
    .slice(0, 6);

  const thisMoviesContent = thisMovies
    .map((movie) => {
      return Movie(movie);
    })
    .join("");

  const thisMoviesAll = movies.filter((movie) => {
    if (movie.filterBy <= 1000) {
      return movie;
    }
  });
  // ****************************Find Movies

  // *************************************Append Movies to main
  moviesContainer.innerHTML = thisMoviesContent;
  movieSection.appendChild(moviesContainer);
  main.appendChild(movieSection);
  // *************************************Append Movies to main

  // *********************************************
  // see all
  const seeAllBtn = document.querySelector("#" + title);
  console.log(seeAllBtn);

  seeAllBtn.addEventListener(
    "click",
    () => {
      seeAllBtn.classList.add("hide");
      new ShowAllMovies(
        seeAllBtn,
        thisMoviesAll,
        main,
        movieSection,
        moviesContainer,
        header,
        input
      );
    },
    false
  );
}

export default MovieGenresSection;
