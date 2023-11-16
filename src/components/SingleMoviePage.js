function SingleMoviePage(
  movies,
  movieSection,
  main,
  header,
  input,
  html,
  moviesContainer,
  newMoviesContainer
) {
  const movie = document.querySelectorAll(".movies_movie");

  // ON MOVIE CLICK, SHOW SINGLE MOVIE PAGE
  movie.forEach((item) => {
    item.addEventListener(
      "click",
      function showMovie() {
        const itemValue = item.value;

        // Find Movie
        let foundMovie = movies.filter((movie) => {
          const { popularity } = movie;

          if (popularity == itemValue) {
            return movie;
          }
        });

        let movie = foundMovie[0];
        const { backgroundImg, img, title, description, rating } = movie;

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
              <img src=${backgroundImg} alt=${title} />
            </div>

            <div class="single-movie-synopsis">
              <div class="wrapper">
                <section class="single-movie-content">
                  <div class="row">
                    <div class="col-2">
                      <div class="img-container">
                        <img src=${img} alt=${title} />
                      </div>
                    </div>
                    <div class="col-10">
                      <div class="single-movie-rating-container">
                        <p class="single-movie-rating">${rating}</p>
                        <p class="single-movie-ratingcount">40,325</p>
                      </div>
                      <h1>${title}</h1>
                      <p class="single-movie-runtime">1 hr 35 min</p>
                    </div>
                  </div>

                  <p class="single-movie-description">${description}</p>

                  <h2>Cast</h2>
                </section>

                <section class="single-movie-cast">
                  <div class="container">
                    <div class="single-movie-cast-div">
                      <div class="single-movie-cast-div-member">
                        <span class="placeholder"></span>
                        <p class="single-movie-cast-div-member-name">
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div class="single-movie-cast-div">
                      <div class="single-movie-cast-div-member">
                        <span class="placeholder"></span>
                        <p class="single-movie-cast-div-member-name">
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div class="single-movie-cast-div">
                      <div class="single-movie-cast-div-member">
                        <span class="placeholder"></span>
                        <p class="single-movie-cast-div-member-name">
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div class="single-movie-cast-div">
                      <div class="single-movie-cast-div-member">
                        <span class="placeholder"></span>
                        <p class="single-movie-cast-div-member-name">
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div class="single-movie-cast-div">
                      <div class="single-movie-cast-div-member">
                        <span class="placeholder"></span>
                        <p class="single-movie-cast-div-member-name">
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div class="single-movie-cast-div">
                      <div class="single-movie-cast-div-member">
                        <span class="placeholder"></span>
                        <p class="single-movie-cast-div-member-name">
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <button class="btn-primary single-movie-synopsis-btn">
                  Buy Movie
                </button>
              </div>
            </div>
          </section>
        `;
        movieContentSection.innerHTML = movieContent;

        main.appendChild(movieContentSection);

        // toggle add/hide
        header.classList.add("hide");
        input.classList.add("hide");
        moviesContainer.classList.add("hide");

        // if new movie container exist
        if (newMoviesContainer) {
          newMoviesContainer.classList.add("hide");

          if (newMoviesContainer.classList.contains("show")) {
            newMoviesContainer.classList.remove("show");
            newMoviesContainer.classList.add("hide");
          }
        }

        // toggle/hide
        document.querySelectorAll(".movie-section").forEach((section) => {
          section.classList.add("hide");

          if (section.classList.contains("show")) {
            section.classList.add("hide");
            section.classList.remove("show");
          }
        });

        // toggle hide
        if (
          moviesContainer.classList.contains("show") &
          header.classList.contains("show") &
          input.classList.contains("show")
        ) {
          header.classList.add("hide");
          header.classList.remove("show");
          input.classList.add("hide");
          input.classList.remove("show");
          moviesContainer.classList.add("hide");
          moviesContainer.classList.remove("show");
        }

        // GO BACK HOME
        const backButtons = document.querySelectorAll(".btn-navigation");

        backButtons.forEach((button) => {
          button.addEventListener(
            "click",
            () => {
              moviesContainer.classList.remove("hide");
              moviesContainer.classList.add("show");

              header.classList.remove("hide");
              header.classList.add("show");

              input.classList.remove("hide");
              input.classList.add("show");

              document.querySelectorAll(".movie-section").forEach((section) => {
                section.classList.remove("hide");
                section.classList.add("show");
              });
              main.removeChild(movieContentSection);

              if (newMoviesContainer) {
                newMoviesContainer.classList.remove("hide");
                newMoviesContainer.classList.add("show");

                header.classList.remove("hide");
                header.classList.add("show");

                input.classList.remove("hide");
                input.classList.add("show");
              }
            },
            false
          );
        });
      },
      false
    );
  });
}

export default SingleMoviePage;
