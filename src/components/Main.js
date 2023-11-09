const main = document.querySelector("main");

function CreateMovieScroll(movies) {
  // *********************************************
  // create az section
  (function AZ() {
    // *********************************************
    const movieSection = document.createElement("section");
    movieSection.setAttribute("class", "movie-section");

    const dFlex = document.createElement("div");
    dFlex.setAttribute("class", "d-flex");
    dFlex.innerHTML = `
    <h2>A-Z</h2>
    <button id="a-z">See All</button>
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
        const { img, rating, title } = movie;
        return `
      <button class="movie">
        <div class="movie-img-container">
          <img
          src=${img}
          alt="Five Nights" /> 
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
        const { img, rating, title } = movie;
        return `
        <button class="movie">
          <div class="movie-img-container">
              <img
              src=${img}
              alt="Five Nights" /> 
          </div>
         <div class="movie-text">
              <h3>${title}</h3>
              <span class="rating">${rating}</span> 
         </button>
         
      </div>
        `;
      });
      main.innerHTML = azPageContent;
    }
  })();

  (function CriticallyAcclaimed() {
    // *********************************************
    const movieSection = document.createElement("section");
    movieSection.setAttribute("class", "movie-section");

    const dFlex = document.createElement("div");
    dFlex.setAttribute("class", "d-flex");
    dFlex.innerHTML = `
    <h2>Critically Acclaimed</h2>
    <button id="a-z">See All</button>
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
      const { img, rating, title } = movie;
      return `
    <button class="movie">
    <div class="movie-img-container">
    <img
    src=${img}
    alt=${title} />
    </div>
    <div class="movie-text">
    <h3>${title}</h3>
    <span class="rating">${rating}</span>
    </dbutton

    </div>
    `;
    }).join("");
    moviesContainer.innerHTML = CriticallyAcclaimedContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);
  })();

  (function New() {
    // *********************************************
    const movieSection = document.createElement("section");
    movieSection.setAttribute("class", "movie-section");

    const dFlex = document.createElement("div");
    dFlex.setAttribute("class", "d-flex");
    dFlex.innerHTML = `
    <h2>new</h2>
    <button id="a-z">See All</button>
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
      const { img, rating, title, backgroundImg } = movie;
      return `
    <button class="movie">
    <div class="movie-img-container">
    <img
    src=${img}
    alt=${title} />
    </div>
    <div class="movie-text">
    <h3>${title}</h3>
    <span class="rating">${rating}</span>
    </dbutton

    </div>
    `;
    }).join("");
    moviesContainer.innerHTML = NewContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);
  })();

  // **********************END OF COMPONENT*******
  const movie = document.querySelectorAll(".movie");

  movie.forEach((item) => {
    item.addEventListener("click", createMoviePage, false);
  });

  function createMoviePage() {
    main.innerHTML = movieContent;
    console.log("test");
  }
}

// Dont need, already rendering in the async function
//    CreateMovieScroll();

export default CreateMovieScroll;
