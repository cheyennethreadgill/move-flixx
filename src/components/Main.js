const genre = document.querySelector('.genre');

function Main(movies) {
  const highlyRatedMovies = movies.filter((movie) => {
    if (movie.rating >= 7.6) {
      return movie;
    }
  });

  const movieContent = highlyRatedMovies
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
  genre.innerHTML = movieContent;
}

// Dont need, already rendering in the async function
//   Main();

export default Main;
