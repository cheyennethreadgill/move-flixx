function Movie(movie) {
  const { img, rating, title, popularity } = movie;

  return `
      <button class="movies_movie" value=${popularity} value=${popularity}>
        <div class="movies_movie_img-container">
          <img
          src=${img}
          alt=${title} /> 
        </div>
        <div class="movies_movie_text">
          <h3>${title}</h3>
          <span class="movies_movie_text_rating">${rating}</span> 
        </div>
      </button>
      `;
}

export default Movie;
