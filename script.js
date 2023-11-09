import CreateMovieScroll from "./src/components/Main.js";

const MoviesList = async function () {
  const API_URL =
    " https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const resp = await fetch(API_URL);
  const data = await resp.json();
  const moviesGrab = await data.results;

  // returning movie array
  const movieList = moviesGrab.map((movie) => {
    const movieData = {
      popularity: movie.popularity,
      title: movie.title,
      rating: movie.vote_average,

      ratingCount: movie.vote_count,
      description: movie.overview,
      img: IMG_PATH + movie.poster_path,
      backgroundImg: IMG_PATH + movie.backdrop_path,

      genre: movie.genre_ids,
      date: movie.release_date,
    };
    return movieData;
  });

  console.log(moviesGrab);

  // passing movie array to main component
  // CreateMovieScroll(movieList);
};

MoviesList();

export default MoviesList;
