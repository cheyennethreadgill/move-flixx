function Banner(header, banner, movies) {
  // return most popular movie
  //   const mostPopularMovie = movies.filter((movie) => {
  //     const { popularity } = movie;

  //     if (popularity > 2000) {
  //       return movie;
  //     }
  //   });
  //   var mostPopularMovieData = mostPopularMovie[0];

  // return randowm movie
  const getRandomMovie = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[getRandomMovie];

  const { backgroundImg, description, title } = randomMovie;
  // parse banner content with random movie data
  const bannerContent = `
    <div class="banner_img">
      <img src=${backgroundImg} alt=${title} />
    </div>
    <div class="banner_body">
      <h1 class="banner_heading">${title}</h1>
      <h3 class="banner_text">${description}</h3>
    </div>
  `;
  // append banner content
  banner.innerHTML = bannerContent;
}

export default Banner;
