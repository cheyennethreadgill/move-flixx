import Movie from "./Movie.js";

function CriticallyAcclaimed(movies, movieSection, main, header) {
  // *********************************************
  movieSection = document.createElement("section");
  movieSection.setAttribute("class", "movie-section");

  const dFlex = document.createElement("div");
  dFlex.setAttribute("class", "d-flex");
  dFlex.innerHTML = `
    <h2>Critically Acclaimed</h2>
    <button id="critically-acclaimed" class="seeAll">See All</button>
  `;
  movieSection.appendChild(dFlex);

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "critically-acclaimed");
  moviesContainer.setAttribute("class", "movies");

  // CriticallyAcclaimed Movies
  const CriticallyAcclaimedMovies = movies
    .filter((movie) => {
      if (movie.popularity <= 1000) {
        return movie;
      }
    })
    .slice(0, 6);

  const CriticallyAcclaimedContent = CriticallyAcclaimedMovies.map((movie) => {
    return Movie(movie);
  }).join("");
  moviesContainer.innerHTML = CriticallyAcclaimedContent;
  movieSection.appendChild(moviesContainer);
  main.appendChild(movieSection);
}

export default CriticallyAcclaimed;
