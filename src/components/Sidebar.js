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
  // selectors
  const sidebar = document.querySelector(".navigation");
  const sidebarHamburger = document.querySelector(".navigation-hamburger");
  const ul = sidebar.querySelector("ul");
  const bodyBlackout = document.createElement("div");

  // variables
  var genreListContent;

  // injections
  body.appendChild(bodyBlackout);

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

  // inject movies when genre is clicked
  const genreLink = document.querySelectorAll(".sidebar_link");
  genreLink.forEach((link) => {
    const linkValue = link.value;

    link.addEventListener(
      "click",
      () => {
        // find movie that matches genre thats clicked
        const genreFilter = movies.filter((movie) => {
          // console.log(movie.genre[0] === linkValue);
          return linkValue == movie.genre[0];
        });

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
        window.scrollTo({
          top: 863.2000122070312,
          behavior: "smooth",
        });
      },
      false
    );
  });
};

export default Sidebar;
