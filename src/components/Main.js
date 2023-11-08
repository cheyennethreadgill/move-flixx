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
        <img
            class="movie-img"
            src=${img}
            alt="Five Nights" />
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
