function Movie(movie) {
  const { img, rating, title, popularity } = movie;

  // Add rating colors
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
}

export default Movie;
