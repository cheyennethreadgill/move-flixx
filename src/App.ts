import Banner from "./components/Home/Banner";
import SearchInput from "./components/SearchInput";
import SingleMoviePage from "./components/SingleMoviePage";
import MovieGenresSection from "./components/Home/MovieGenresSection";
import Sidebar from "./components/Sidebar";
import MoviesList from "./hooks/apiCalls";
import "../src/styles/index.scss";

interface TagInterface {
  rating: number;
  // *type override
  classList: any;
  innerText: number;
}

// Invokes App at end
async function App() {
  const apiPackageResponse = await MoviesList();
  const { movieList, genres } = apiPackageResponse;

  var movieSection;

  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const banner = document.querySelector(".banner");
  const input = document.querySelector(".search_input");

  const moviesContainer = document.createElement("section");
  moviesContainer.setAttribute("class", "movies_container");

  // queries
  // const mediaQuerySmall = window.matchMedia("(min-width: 200px)");
  // const mediaQueryMaxSmall = window.matchMedia("(max-width: 400px)");
  // const mediaQueryMedium = window.matchMedia("(min-width: 600px)");
  // const mediaQueryMaxMedium = window.matchMedia("(max-width: 600px)");
  // const mediaQueryLarge = window.matchMedia("(min-width: 1024px)");

  // Components
  Sidebar(
    body,
    movieList,
    genres,
    main,
    movieSection,
    moviesContainer,
    header,
    input,
    // mediaQuerySmall,
    // mediaQueryMedium,
    // mediaQueryMaxMedium,
    // mediaQueryLarge,
    banner
  );

  Banner(
    header,
    banner,
    movieList
    // mediaQuerySmall,
    // mediaQueryMedium,
    // mediaQueryMaxMedium,
    // mediaQueryLarge
  );

  const goSearch = new SearchInput(
    movieList,
    movieSection,
    moviesContainer,
    main,
    header,
    input,
    // mediaQuerySmall,
    // mediaQueryMedium,
    // mediaQueryMaxMedium,
    // mediaQueryLarge,
    banner
  );

  goSearch.goListener();

  // const InputGo = new SearchInput(
  //   movieList,
  //   movieSection,
  //   moviesContainer,
  //   main,
  //   header,
  //   input,
  //   mediaQuerySmall,
  //   mediaQueryMedium,
  //   mediaQueryMaxMedium,
  //   mediaQueryLarge,
  //   banner
  // );
  // InputGo.goListener();

  // **************************************************GENRES

  const All = new (MovieGenresSection as any)(
    "All",
    movieList,
    movieSection,
    main,
    header,
    input,
    "rating",
    // mediaQuerySmall,
    // mediaQueryMedium,
    // mediaQueryMaxMedium,
    // mediaQueryLarge,
    banner
  );

  const New = new (MovieGenresSection as any)(
    "New",
    movieList,
    movieSection,
    main,
    header,
    input,
    "ratingCount",
    // mediaQuerySmall,
    // mediaQueryMedium,
    // mediaQueryMaxMedium,
    // mediaQueryLarge,
    banner
  );

  const CriticallyAcclaimed = new (MovieGenresSection as any)(
    "critically-acclaimed",
    movieList,
    movieSection,
    main,
    header,
    input,
    "popularity",
    // mediaQuerySmall,
    // mediaQueryMedium,
    // mediaQueryMaxMedium,
    // mediaQueryLarge,
    banner
  );

  All.createMovieSection();
  New.createMovieSection();
  CriticallyAcclaimed.createMovieSection();

  // Add rating after movie section has been created
  const ratingTags: any = document.querySelectorAll(
    ".movies_movie_text_rating"
  );

  ratingTags.forEach((tag: TagInterface) => {
    if (tag.innerText >= 7) {
      tag.classList.add("green");
    }
    if (tag.innerText >= 5.4 && tag.innerText <= 7) {
      tag.classList.add("orange");
    }
    if (tag.innerText >= 0 && tag.innerText <= 5.3) {
      tag.classList.add("red");
    }
  });

  SingleMoviePage(
    movieList,
    movieSection,
    main,
    header,
    input,
    moviesContainer,
    banner
  );
}
App();
// document.addEventListener("DOMContentLoaded", App, false);

