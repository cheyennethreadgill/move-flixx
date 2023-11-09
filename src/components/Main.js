// const highRatingContainer = document.querySelector('.high-rating');
// const popularContainer = document.querySelector('.popular');
const main = document.querySelector('main');

function CreateMovieScroll(movies) {
  // const highlyRatedMovies = movies.filter((movie) => {
  //   if (movie.rating >= 7.6) {
  //     return movie;
  //   }
  // });

  // const highlyRatedMovieContent = highlyRatedMovies
  //   .map((movie) => {
  //     const {img, rating, title} = movie;
  //     return `
  //   <div class="movie">
  //   <div class="movie-img-container">
  //   <img
  //   src=${img}
  //   alt="Five Nights" />
  //   </div>
  //   <div class="movie-text">
  //   <h3>${title}</h3>
  //   <span class="rating">${rating}</span>
  //   </div>
  //   </div>
  //   `;
  //   })
  //   .join('');

  // highRatingContainer.innerHTML = highlyRatedMovieContent;

  // *********************************************
  // create az section
  (function AZ() {
    // *********************************************
    // const aZ = document.querySelector('.a-z');
    const movieSection = document.createElement('section');
    movieSection.setAttribute('class', 'movie-section');

    const dFlex = document.createElement('div');
    dFlex.setAttribute('class', 'd-flex');
    dFlex.innerHTML = `
    <h2>A-Z</h2>
    <button id="a-z">See All</button>
  `;
    movieSection.appendChild(dFlex);

    const moviesContainer = document.createElement('section');
    moviesContainer.setAttribute('class', 'a-z');
    moviesContainer.setAttribute('class', 'genre');

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
        const {img, rating, title} = movie;
        return `
      <div class="movie">
        <div class="movie-img-container">
          <img
          src=${img}
          alt="Five Nights" /> 
        </div>
        <div class="movie-text">
          <h3>${title}</h3>
          <span class="rating">${rating}</span> 
        </div>
      </div>
      `;
      })
      .join('');
    moviesContainer.innerHTML = aZContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);
    // aZ.innerHTML = aZContent;
    // *********************************************

    // show AZ page
    document.getElementById('a-z').addEventListener('click', showAZ, false);
    // trigger when see all button is pressed
    function showAZ(movies) {
      const azPageContent = aZArray.map((movie) => {
        const {img, rating, title} = movie;
        return `
        <div class="movie">
          <div class="movie-img-container">
              <img
              src=${img}
              alt="Five Nights" /> 
          </div>
         <div class="movie-text">
              <h3>${title}</h3>
              <span class="rating">${rating}</span> 
         </div>
         
      </div>
        `;
      });
      main.innerHTML = azPageContent;
    }
  })();

  (function CriticallyAcclaimed() {
    // *********************************************
    const movieSection = document.createElement('section');
    movieSection.setAttribute('class', 'movie-section');

    const dFlex = document.createElement('div');
    dFlex.setAttribute('class', 'd-flex');
    dFlex.innerHTML = `
    <h2>Critically Acclaimed</h2>
    <button id="a-z">See All</button>
  `;
    movieSection.appendChild(dFlex);

    const moviesContainer = document.createElement('section');
    moviesContainer.setAttribute('class', 'critically-acclaimed');
    moviesContainer.setAttribute('class', 'genre');

    // CriticallyAcclaimed
    const CriticallyAcclaimed = movies
      .filter((movie) => {
        if (movie.popularity <= 1000) {
          return movie;
        }
      })
      .slice(0, 5);

    const CriticallyAcclaimedContent = CriticallyAcclaimed.map((movie) => {
      const {img, rating, title} = movie;
      return `
    <div class="movie">
    <div class="movie-img-container">
    <img
    src=${img}
    alt=${title} />
    </div>
    <div class="movie-text">
    <h3>${title}</h3>
    <span class="rating">${rating}</span>
    </div>

    </div>
    `;
    }).join('');
    moviesContainer.innerHTML = CriticallyAcclaimedContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);
  })();

  (function New() {
    // *********************************************
    const movieSection = document.createElement('section');
    movieSection.setAttribute('class', 'movie-section');

    const dFlex = document.createElement('div');
    dFlex.setAttribute('class', 'd-flex');
    dFlex.innerHTML = `
    <h2>new</h2>
    <button id="a-z">See All</button>
  `;
    movieSection.appendChild(dFlex);

    const moviesContainer = document.createElement('section');
    moviesContainer.setAttribute('class', 'new');
    moviesContainer.setAttribute('class', 'genre');

    // New
    const New = movies
      .filter((movie) => {
        if (movie.ratingCount >= 1800) {
          return movie;
        }
      })
      .slice(0, 5);

    const NewContent = New.map((movie) => {
      const {img, rating, title} = movie;
      return `
    <div class="movie">
    <div class="movie-img-container">
    <img
    src=${img}
    alt=${title} />
    </div>
    <div class="movie-text">
    <h3>${title}</h3>
    <span class="rating">${rating}</span>
    </div>

    </div>
    `;
    }).join('');
    moviesContainer.innerHTML = NewContent;
    movieSection.appendChild(moviesContainer);
    main.appendChild(movieSection);
  })();
}

// Dont need, already rendering in the async function
//    CreateMovieScroll();

export default CreateMovieScroll;
