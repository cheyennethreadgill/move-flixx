import Movie from "./Movie.js";

// show AZ page
function ShowAllMovies(seeAllBtn, movies, main, movieSection, moviesContainer) {
  const allMoviesContent = movies
    .map((movie) => {
      const { img, rating, title, popularity } = movie;
      return `
        
        <button class="movie" value=${popularity} value=${popularity}>
            <div class="movie-img-container">
                <img
                src=${img}
                alt=${title} /> 
            </div>
            <div class="movie-text">
                <h3>${title}</h3>
                <span class="movie-text-rating">${rating}</span> 
            </div>
        </button>
        `;
    })
    .join("");

  main.innerHTML = allMoviesContent;
  main.style.display = "grid";
  //   main.style.gridTemplateColumns = "repeat(6, 1fr)";
  //   main.style.gap = "2em";
  //   main.style.padding = "0 7.8rem";
  //   main.classList.add("movies");

  // Add rating
  const ratingTags = document.querySelectorAll(".movie-text-rating");

  ratingTags.forEach((tag) => {
    if (tag.innerHTML >= 7) {
      tag.classList.add("green");
    }
    if ((tag.innerHTML >= 5.4) & (tag.innerHTML <= 7)) {
      tag.classList.add("orange");
    }
    if ((tag.innerHTML >= 0) & (tag.innerHTML <= 5.3)) {
      tag.classList.add("red");
    }
  });
}

export default ShowAllMovies;
