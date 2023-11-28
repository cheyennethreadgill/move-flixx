import App from "./src/components/App.js";

// const API_KEY = "04c35731a5ee918f014970082a0088b1";
const API_KEY = "73991f31e5ab9a3433329ca5ba147571";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzk5MWYzMWU1YWI5YTM0MzMzMjljYTViYTE0NzU3MSIsInN1YiI6IjY1NWJkZmNhZDRmZTA0MDBjNDI1M2MzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JB3IIqzRy7X-JMmjGIvyO8iDIaTCKFDGr3vYocB6d4";

const MoviesList = async function () {
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
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

  // passing movie array to main component
  App(movieList, genres);

  console.log(genres);
  console.log(movieList);
  console.log("_______________________SCRIPT.JS END");
};

// const GenreList = async function () {

// };

MoviesList();

export default MoviesList;
