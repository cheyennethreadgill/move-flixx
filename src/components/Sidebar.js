const Sidebar = (body, movies, genres) => {
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
        return ` <li>
        <a href="#">${genre.name}</a>
      </li>`;
      })
      .join("");
    const gotGenre = genres.map((genre) => {
      console.log(genre.name);

      // const gotMovieGenre = movies.map((movie) => {
      //   let movieGenreArray = movie.genre;
      //   console.log(movieGenreArray);

      //   const allGenresFromArray = movieGenreArray.forEach((genre) => {
      //     return genre;
      //   });
      //   console.log(allGenresFromArray);

      //   // allGenresFromArray.filter((genre) => {
      //   //   // console.log(genre === movie)
      //   // });
      //   // console.log(movie.genre[0])
      // });

      // movies.map((movie) => {
      //   console.log(gotGenre === movie.genre[0]);
      // });
    });
  };

  // return genre
  getGenre();

  // inject links into nav uL
  ul.innerHTML = genreListContent;
};

export default Sidebar;
