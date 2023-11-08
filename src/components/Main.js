const highRatingContainer = document.querySelector('.high-rating');
const popularContainer = document.querySelector('.popular');

function Main(movies) {
  const highlyRatedMovies = movies.filter((movie) => {
    if (movie.rating >= 7.6) {
      return movie;
    }
  });
  const popularMovies = movies.filter((movie) => {
    if (movie.popularity >= 1000) {
      return movie;
    }
  } );
    

  const highlyRatedMovieContent = highlyRatedMovies
    .map((movie) => {
      const {img, rating, title} = movie;
      return `
      <div class="movie">
        <div class="movie-img-container">
            <img
            src=${img}
            alt="Five Nights" /> 
        </div>
       
        <h3>${title}</h3>
        <span class="rating">${rating}</span>
    </div>
      `;
    })
    .join('');

  const popularMoviesContent = popularMovies
    .map((movie) => {
      const {img, rating, title} = movie;
      return `
      <div class="movie">
        <div class="movie-img-container">
            <img
            src=${img}
            alt="Five Nights" /> 
        </div>
       
        <h3>${title}</h3>
        <span class="rating">${rating}</span>
    </div>
      `;
    })
    .join('');
  highRatingContainer.innerHTML = highlyRatedMovieContent;
  popularContainer.innerHTML = popularMoviesContent;
}

// Dont need, already rendering in the async function
//   Main();

export default Main;
