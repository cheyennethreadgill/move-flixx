// Returns movieList and genres to App

const MoviesList = async function () {
  const API_KEY = "73991f31e5ab9a3433329ca5ba147571";
  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzk5MWYzMWU1YWI5YTM0MzMzMjljYTViYTE0NzU3MSIsInN1YiI6IjY1NWJkZmNhZDRmZTA0MDBjNDI1M2MzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JB3IIqzRy7X-JMmjGIvyO8iDIaTCKFDGr3vYocB6d4";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const resp = await fetch(API_URL);
  const data = await resp.json();
  const moviesFetchResponse = await data.results;
  const {
    popularity,
    title,
    vote_average,
    vote_count,
    overview,
    poster_path,
    backdrop_path,
    genre_ids,
    release_date,
  } = moviesFetchResponse;
  // returning movie array
  // ***for each movie
  const movieList = moviesFetchResponse.map((movie) => {
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

  // returning genre array
  const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  var auth = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
  const getData = await fetch(GENRE_URL, auth);
  const genreData = await getData.json();
  const genres = genreData.genres;

  // returning movieList and genres
  const apiPackage = {
    movieList,
    genres,
  };
  return apiPackage;
};
export default MoviesList;

