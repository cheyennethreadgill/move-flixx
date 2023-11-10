const main = document.querySelector("main");
const header = document.querySelector("header");

function CreateMovieScroll(movies) {
  // *********************************************
  var movieSection;
  // create az section
  (function AZ() {
    // *********************************************
    movieSection = document.createElement("section");
    movieSection.setAttribute("class", "movie-section");

    const dFlex = document.createElement("div");
    dFlex.setAttribute("class", "d-flex");
    dFlex.innerHTML = `
    <h2>A-Z</h2>
    <button id="a-z" class="seeAll">See All</button>
  `;
    movieSection.appendChild(dFlex);

    const moviesContainer = document.createElement("section");
    moviesContainer.setAttribute("class", "a-z");
    moviesContainer.setAttribute("class", "movies");

    // a-z
    const aZArray = movies
      .filter((movie) => {
        if (movie.rating > 0) {
          return movie;
        }
      })
      .slice(0, 5);

    const aZContent = aZArray
      .map((movie) => {
        const { img, rating, title, popularity } = movie;
        return `
      <button class="movie" value=${popularity} value=${popularity}>
        <div class="movie-img-container">
          <img
          src=${img}
          alt=${title} /> 
        </div>
        <div class="movie-text">
          <h3>${title}</h3>
          <span class="rating">${rating}</span> 
        </div>
      </button>
      `;
      })
      .join("");
    moviesContainer.innerHTML = aZContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);

    // *********************************************

    // show AZ page
    document.getElementById("a-z").addEventListener("click", showAZ, false);
    // trigger when see all button is pressed
    function showAZ(movies) {
      const azPageContent = aZArray.map((movie) => {
        const { img, rating, title, popularity } = movie;
        return `
        
        <button class="movie" value=${popularity} value=${popularity}>
          <div class="movie-img-container">
              <img
              src=${img}
              alt=${title} /> 
          </div>
         <div class="movie-text">
              <h3>${title}</h3>
              <span class="rating">${rating}</span> 
              
          </div>
        </button>
        `;
      });
      main.innerHTML = azPageContent;
    }
  })();

  (function CriticallyAcclaimed() {
    // *********************************************
    movieSection = document.createElement("section");
    movieSection.setAttribute("class", "movie-section");

    const dFlex = document.createElement("div");
    dFlex.setAttribute("class", "d-flex");
    dFlex.innerHTML = `
    <h2>Critically Acclaimed</h2>
    <button id="critically-acclaimed" class="seeAll">See All</button>
  `;
    movieSection.appendChild(dFlex);

    const moviesContainer = document.createElement("section");
    moviesContainer.setAttribute("class", "critically-acclaimed");
    moviesContainer.setAttribute("class", "movies");

    // CriticallyAcclaimed
    const CriticallyAcclaimed = movies
      .filter((movie) => {
        if (movie.popularity <= 1000) {
          return movie;
        }
      })
      .slice(0, 5);

    const CriticallyAcclaimedContent = CriticallyAcclaimed.map((movie) => {
      const { img, rating, title, popularity } = movie;
      return `
    <button class="movie" value=${popularity}>
      <div class="movie-img-container">
        <img
        src=${img}
        alt=${title} />
      </div>
      <div class="movie-text">
        <h3>${title}</h3>
        <span class="rating">${rating}</span>
      </div>
    </a>
    `;
    }).join("");
    moviesContainer.innerHTML = CriticallyAcclaimedContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);
  })();

  (function New() {
    // *********************************************
    movieSection = document.createElement("section");
    movieSection.setAttribute("class", "movie-section");

    const dFlex = document.createElement("div");
    dFlex.setAttribute("class", "d-flex");
    dFlex.innerHTML = `
    <h2>new</h2>
    <button id="new" class="seeAll">See All</button>
  `;
    movieSection.appendChild(dFlex);

    const moviesContainer = document.createElement("section");
    moviesContainer.setAttribute("class", "new");
    moviesContainer.setAttribute("class", "movies");

    // New
    const New = movies
      .filter((movie) => {
        if (movie.ratingCount >= 1800) {
          return movie;
        }
      })
      .slice(0, 5);

    const NewContent = New.map((movie) => {
      const {
        backgroundImg,
        img,
        title,
        description,
        ratingCount,
        rating,
        popularity,
      } = movie;

      return `
    <button class="movie" value=${popularity}>
      <div class="movie-img-container">
        <img
        src=${img}
        alt=${title} />
      </div>
      <div class="movie-text">
        <h3>${title}</h3>
        <span class="rating">${rating}</span>
      </div>
    </button>
    `;
    }).join("");
    moviesContainer.innerHTML = NewContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);
  })();

  // **********************END OF COMPONENT*******
  const movie = document.querySelectorAll(".movie");

  // SHOW SINGLE MOVIE PAGE
  movie.forEach((item) => {
    // console.log(item.value);
    item.addEventListener(
      "click",
      function showMovie() {
        const itemValue = item.value;

        let foundMovie = movies.filter((movie) => {
          const { popularity } = movie;

          if (popularity == itemValue) {
            return movie;
          }
        });
        let movie = foundMovie[0];
        const {
          backgroundImg,
          img,
          title,
          description,
          ratingCount,
          rating,
          popularity,
        } = movie;

        const movieContentSection = document.createElement("section");
        const movieContent = `
      <section class="single-movie">
        <button class="btn-navigation">
          <i
            class="fa-solid fa-chevron-left fa-xl"
            style="color: #8190eb"
          ></i>
        </button>

        <div class="single-movie-img">
          <img
            src=${backgroundImg}
            alt=${title}
          />
        </div>

        <div class="single-movie-synopsis">
          <div class="wrapper">
            <section class="single-movie-content">
              <div class="row">
                <div class="col-2">
                  <div class="img-container">
                    <img
                      src=${img}
                      alt=${title}
                    />
                  </div>
                </div>
                <div class="col-10">
                  <p class="single-movie-ratingcount">40,325</p>
                  <h1>${title}</h1>
                  <p class="single-movie-runtime">1 hr 35 min</p>
                </div>
              </div>

              <p class="single-movie-description">
                ${description}
              </p>

              <h2>Cast</h2>
            </section>
            <section class="single-movie-cast">
              <div class="container">
                <div class="single-movie-cast-div">
                  <div class="single-movie-cast-div-member">
                    <span class="placeholder"></span>
                    <p class="single-movie-cast-div-member-name">Lorem Ipsum</p>
                  </div>
                </div>
                <div class="single-movie-cast-div">
                  <div class="single-movie-cast-div-member">
                    <span class="placeholder"></span>
                    <p class="single-movie-cast-div-member-name">Lorem Ipsum</p>
                  </div>
                </div>
                <div class="single-movie-cast-div">
                  <div class="single-movie-cast-div-member">
                    <span class="placeholder"></span>
                    <p class="single-movie-cast-div-member-name">Lorem Ipsum</p>
                  </div>
                </div>
                <div class="single-movie-cast-div">
                  <div class="single-movie-cast-div-member">
                    <span class="placeholder"></span>
                    <p class="single-movie-cast-div-member-name">Lorem Ipsum</p>
                  </div>
                </div>
                <div class="single-movie-cast-div">
                  <div class="single-movie-cast-div-member">
                    <span class="placeholder"></span>
                    <p class="single-movie-cast-div-member-name">Lorem Ipsum</p>
                  </div>
                </div>
                <div class="single-movie-cast-div">
                  <div class="single-movie-cast-div-member">
                    <span class="placeholder"></span>
                    <p class="single-movie-cast-div-member-name">Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="container">
          <button class="btn-primary">Buy Movie</button>
        </div>
      </section>
    `;
        movieContentSection.innerHTML = movieContent;

        main.appendChild(movieContentSection);

        document.querySelectorAll(".movie-section").forEach((section) => {
          section.classList.add("hide");
          header.classList.add("hide");

          if (section.classList.contains("show")) {
            header.classList.add("hide");
            header.classList.remove("show");

            section.classList.add("hide");
            section.classList.remove("show");
          }
        });

        // GO BACK HOME
        const backButtons = document.querySelectorAll(".btn-navigation");

        backButtons.forEach((button) => {
          button.addEventListener(
            "click",
            () => {
              console.log("work");
              document.querySelectorAll(".movie-section").forEach((section) => {
                section.classList.remove("hide");
                section.classList.add("show");

                header.classList.remove("hide");
                header.classList.add("show");
              });
              main.removeChild(movieContentSection);
            },
            false
          );
        });
      },
      false
    );
  });
}

// Dont need, already rendering in the async function
//    CreateMovieScroll();

export default CreateMovieScroll;
