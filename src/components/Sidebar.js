import ShowAllMovies from "./ShowAllMovies.js";

const Sidebar = (
  body,
  movieList,
  genres,
  main,
  movieSection,
  moviesContainer,
  header,
  input,
  mediaQuerySmall,
  mediaQueryMedium,
  mediaQueryMaxMedium,
  mediaQueryLarge,
  banner
) => {
  // selectors
  const sidebar = document.querySelector(".navigation");
  const sidebarHamburger = document.querySelector(".navigation-hamburger");
  const ul = sidebar.querySelector("ul");
  const bodyBlackout = document.createElement("div");

  // variables
  var genreListContent;

  // injections
  body.appendChild(bodyBlackout);

  // close sidebar when body is clicked
  bodyBlackout.addEventListener(
    "click",
    () => {
      sidebar.classList.toggle("slide-in-right");
      bodyBlackout.classList.toggle("body-blackout");

      if (!sidebar.classList.contains("slide-in-right")) {
        body.style.cssText = "overflow: initial;";
      }
    },
    false
  );

  // create genre links
  const getGenre = () => {
    genreListContent = genres
      .map((genre) => {
        /**** Returning genre name */
        return ` <li >
          <button href="#" class="seeAll sidebar_link" value=${genre.id}>${genre.name}</button>
        </li>`;
      })
      .join("");
  };
  // return genre to DOM
  getGenre();

  // inject links into nav uL
  ul.innerHTML = genreListContent;

  // animate sidebar when hamburger is clicked
  sidebarHamburger.addEventListener(
    "click",
    () => {
      let status = false;

      if (status === false) {
        sidebar.classList.toggle("slide-in-right");
        body.style.cssText = "overflow: hidden;";

        bodyBlackout.classList.toggle("body-blackout");
        status = true;
      }

      if (!sidebar.classList.contains("slide-in-right")) {
        body.style.cssText = "overflow: initial;";
        status = false;
      }
    },
    false
  );

  // ***inject movies when genre link is clicked
  const genreLink = document.querySelectorAll(".sidebar_link");
  genreLink.forEach((link) => {
    const linkValue = link.value;

    link.addEventListener(
      "click",
      () => {
        // find movie that matches genre thats clicked
        const genreFilter = movieList.filter((movie) => {
          let movieGenreArray = movie.genre;

          // for genre array within each movie, return the genre that matches the link value
          const singleMovieGenreFromArray = movieGenreArray.filter((genre) => {
            return genre == linkValue;
          });
          //   then return the genre generated form the single movie genre array, that matches the link value
          return linkValue == singleMovieGenreFromArray;
        });

        // create and show movie cards in DOM based on the genre clicked
        new ShowAllMovies(
          genreFilter,
          main,
          movieSection,
          moviesContainer,
          header,
          input,
          mediaQuerySmall,
          mediaQueryMedium,
          mediaQueryMaxMedium,
          mediaQueryLarge,
          banner
        );

        // close sidebar when body is clicked
        sidebar.classList.toggle("slide-in-right");
        bodyBlackout.classList.toggle("body-blackout");

        if (!sidebar.classList.contains("slide-in-right")) {
          body.style.cssText = "overflow: initial;";
        }

        // scroll to movie section when genre is clicked
        moviesContainer.scrollIntoView({
          behavior: "smooth",
        });
      },
      false
    );
  });
};

export default Sidebar;

