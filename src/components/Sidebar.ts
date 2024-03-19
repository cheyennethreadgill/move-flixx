import ShowAllMovies from "./ShowAllMovies";

interface BodyInterface {
  style: string;
}

interface GenreInterface {
  id: number;
  name: String;
  linkValue: number;
  genre: string;
}

const Sidebar = (
  body: HTMLElement,
  movieList: [],
  genres: [],
  main: Element,
  movieSection: Element,
  moviesContainer: Element,
  header: Element,
  input: Element,
  // mediaQuerySmall: MediaQueryList,
  // mediaQueryMedium: MediaQueryList,
  // mediaQueryMaxMedium: MediaQueryList,
  // mediaQueryLarge: MediaQueryList,
  banner: Element
) => {
  // selectors
  const sidebar = document.querySelector(".navigation");
  const sidebarHamburger = document.querySelector(".navigation-hamburger");
  const ul = sidebar.querySelector("ul");
  const bodyBlackout = document.createElement("div");

  // variables
  var genreListContent;

  let status = false;
  // close sidebar when body is clicked
  bodyBlackout.addEventListener(
    "click",
    () => {
      if (status === true) {
        sidebar.classList.remove("slide-in-right");
        bodyBlackout.classList.toggle("body-blackout");
      }

      if (!sidebar.classList.contains("slide-in-right")) {
        body.style.cssText = "overflow: initial;";
      }
    },
    false
  );

  // create genre links
  function getGenre() {
    genreListContent = genres
      .map((genre: GenreInterface) => {
        /**** Returning genre name */
        return ` <li >
          <button href="#" class="seeAll sidebar_link" value=${genre.id}>${genre.name}</button>
        </li>`;
      })
      .join("");
  }
  // return genre to DOM
  getGenre();

  // inject links into nav uL
  ul.innerHTML = genreListContent;

  // animate sidebar when hamburger is clicked
  sidebarHamburger.addEventListener(
    "click",
    () => {
      if (status === false) {
        sidebar.classList.add("slide-in-right");
        body.style.cssText = "overflow: hidden;";
        body.appendChild(bodyBlackout);

        bodyBlackout.classList.add("body-blackout");
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
  const genreLinks = document.querySelectorAll(".sidebar_link");

  genreLinks.forEach((link) => {
    const linkValue = (<HTMLButtonElement>link).value;

    link.addEventListener(
      "click",
      () => {
        interface MovieInterface {
          genre: [];
        }
        // find movie that matches genre thats clicked
        const genreFilter: object = movieList.filter(
          (movie: MovieInterface) => {
            let movieGenreArray = movie.genre;

            // for genre array within each movie, return the genre that matches the link value
            const singleMovieGenreFromArray: {} = movieGenreArray.filter(
              (genre: string) => {
                return genre == linkValue;
              }
            );
            //   then return the genre generated form the single movie genre array, that matches the link value
            return linkValue == singleMovieGenreFromArray;
          }
        );

        interface ShowAllMoviesInterface {
          genreFilter: object;
          main: Element;
          movieSection: Element;
          moviesContainer: Element;
          header: Element;
          input: Element;
          // mediaQuerySmall;
          // mediaQueryMedium;
          // mediaQueryMaxMedium;
          // mediaQueryLarge;
          banner: Element;
        }
        // create and show movie cards in DOM based on the genre clicked
        new (ShowAllMovies as any)(
          genreFilter,
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

