function SingleMoviePage(movies, movieSection, main, header, input, html) {
  const movie = document.querySelectorAll(".movies_movie");

  // SHOW SINGLE MOVIE PAGE
  movie.forEach((item) => {
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
        const { backgroundImg, img, title, description } = movie;

        const movieContentSection = document.createElement("section");
        const movieContent = html`
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
                      <p class="single-movie-text-ratingcount">40,325</p>
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
              </div>
            </div>
            <button class="btn-primary">Buy Movie</button>
          </section>
        `;
        movieContentSection.innerHTML = movieContent;

        main.appendChild(movieContentSection);

        document.querySelectorAll(".movie-section").forEach((section) => {
          section.classList.add("hide");
          header.classList.add("hide");
          input.classList.add("hide");

          if (section.classList.contains("show")) {
            header.classList.add("hide");
            header.classList.remove("show");

            section.classList.add("hide");
            section.classList.remove("show");

            input.classList.add("hide");
            input.classList.remove("show");
          }
        });

        // GO BACK HOME
        const backButtons = document.querySelectorAll(".btn-navigation");

        backButtons.forEach((button) => {
          button.addEventListener(
            "click",
            () => {
              document.querySelectorAll(".movie-section").forEach((section) => {
                section.classList.remove("hide");
                section.classList.add("show");

                header.classList.remove("hide");
                header.classList.add("show");

                input.classList.remove("hide");
                input.classList.add("show");
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

export default SingleMoviePage;
