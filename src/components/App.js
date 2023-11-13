import AZ from "./AZ.js";
import CriticallyAcclaimed from "./CriticallyAcclaimed.js";
import New from "./New.js";
import SingleMoviePage from "./SingleMoviePage.js";

function CreateMovieScroll(movies) {
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  var movieSection;
  var aZTitle = "A-Z";
  var CriticallyAcclaimedTitle = "Critically Acclaimed";
  var NewTitle = "New";
  var SingleMoviePageTitle = "A-Z";

  AZ(aZTitle, movies, movieSection, main, header);
  CriticallyAcclaimed(
    CriticallyAcclaimedTitle,
    movies,
    movieSection,
    main,
    header
  );
  New(NewTitle, movies, movieSection, main, header);
  SingleMoviePage(movies, movieSection, main, header);
}

// Dont need, already rendering in the async function
//    CreateMovieScroll();

export default CreateMovieScroll;
