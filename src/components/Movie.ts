interface MovieInterface {
  img: string;
  rating: number;
  title: string;
  popularity: number;
}

// first create the movie
// then access the tags
function Movie(movie: MovieInterface) {
  const { img, rating, title, popularity } = movie;

  const MovieContent = `
    <button class="movies_movie" value=${popularity} value=${popularity}>
      <div class="movies_movie_img-container">
        <img src=${img} alt=${title} />
      </div>
      <div class="movies_movie_text">
        <h3>${title}</h3>
        <span class="movies_movie_text_rating">${rating}</span>
      </div>
    </button>
  `;

  return MovieContent;
}

export default Movie;

