import Movie from "./Movie.js";

// show AZ page
function ShowAllMovies(main, aZArray) {
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

export default ShowAllMovies;
