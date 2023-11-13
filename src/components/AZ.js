import Movie from "./Movie.js";

// create az section
function AZ(movies, movieSection, main, header) {
  // *********************************************
  movieSection = document.createElement("section");
  movieSection.setAttribute("class", "movie-section");

  const dFlex = document.createElement("div");
  dFlex.setAttribute("class", "d-flex");
  dFlex.innerHTML = `
    <h2>A-Z</h2>
    <button id="a-z" class="seeAll">See All</button>
  `;
  movieSection.appendChild(dFlex);

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "a-z");
  moviesContainer.setAttribute("class", "movies");

  // a-z
  const aZArray = movies
    .filter((movie) => {
      if (movie.rating > 0) {
        return movie;
      }
    })
    .slice(0, 6);

  const aZContent = aZArray
    .map((movie) => {
      return Movie(movie);
    })
    .join("");
  moviesContainer.innerHTML = aZContent;
  movieSection.appendChild(moviesContainer);
  main.appendChild(movieSection);

  // *********************************************

  // show AZ page
  document.getElementById("a-z").addEventListener("click", showAZ, false);
  // trigger when see all button is pressed
  function showAZ(movies) {
    const azPageContent = aZArray.map((movie) => {
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
    });
    main.innerHTML = azPageContent;
  }
}

export default AZ;
