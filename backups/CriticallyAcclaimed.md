import Movie from "./Movie.js";
import ShowAllMovies from "./ShowAllMovies.js";

function CriticallyAcclaimed(
CriticallyAcclaimedTitle,
movies,
movieSection,
main,
header,
input
) {
// ******************\*******************Create movie section
movieSection = document.createElement("section");
movieSection.setAttribute("class", "movie-section");

const dFlex = document.createElement("div");
dFlex.setAttribute("class", "d-flex");
dFlex.innerHTML = `

  <h2>${CriticallyAcclaimedTitle}</h2>
  <button id="critically-acclaimed" class="seeAll">See All</button>
  `;
  movieSection.appendChild(dFlex);
  // *************************************Create movie section

// ******************\*******************Create movie container
const moviesContainer = document.createElement("section");
moviesContainer.setAttribute("class", "critically-acclaimed");
moviesContainer.setAttribute("class", "movies_container");
// ******************\*******************Create movie container

// ************\*\*\*\*************Find CriticallyAcclaimed Movies
const CriticallyAcclaimedMovies = movies
.filter((movie) => {
if (movie.popularity <= 1000) {
return movie;
}
})
.slice(0, 6);
const CriticallyAcclaimedMoviesAll = movies.filter((movie) => {
if (movie.popularity <= 1000) {
return movie;
}
});

const CriticallyAcclaimedContent = CriticallyAcclaimedMovies.map((movie) => {
return Movie(movie);
}).join("");
// ************\*\*\*\*************Find CriticallyAcclaimed Movies

// ******************\*******************Append Movies to main
moviesContainer.innerHTML = CriticallyAcclaimedContent;
movieSection.appendChild(moviesContainer);
main.appendChild(movieSection);
// ******************\*******************Append Movies to main

// **********************\***********************
// see all
const seeAllBtn = document.querySelector("#critically-acclaimed");
seeAllBtn.addEventListener(
"click",
() => {
seeAllBtn.classList.add("hide");
new ShowAllMovies(
seeAllBtn,
CriticallyAcclaimedMoviesAll,
main,
movieSection,
moviesContainer,
header,
input
);
},
false
);
}

export default CriticallyAcclaimed;
