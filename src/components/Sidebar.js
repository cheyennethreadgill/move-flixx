import ShowAllMovies from "./ShowAllMovies.js";

const Sidebar = (
  body,
  movies,
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
  const sidebar = document.querySelector(".navigation");
  const sidebarHamburger = document.querySelector(".navigation-hamburger");
  const ul = sidebar.querySelector("ul");
  const bodyBlackout = document.createElement("div");

  body.appendChild(bodyBlackout);

  var genreListContent;

  // animate sidebar
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

  // map movie genre and return movie genre in outer function
  // map genre that matches movie genre
  // ****END GOAL: return genre (genre name)

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
  // return genre
  getGenre();

  // inject links into nav uL
  ul.innerHTML = genreListContent;

  // inject movies when genre is clicked
  //   see all btn
  var seeAllBtn = document.querySelector(".seeAll");
  // find genre id that matches movie.genre[0]
  movies.filter((movie) => {
    let g = genres.filter((genre) => {
      return genre === movie.genre[0];
    });
    return movie;
  });
  const genreLink = document.querySelectorAll(".sidebar_link");
  genreLink.forEach((link) => {
    link.addEventListener(
      "click",
      () => {
        ShowAllMovies(
          movies,
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
      },
      false
    );
  });
};

export default Sidebar;
