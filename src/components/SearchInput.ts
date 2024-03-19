import Movie from "./Movie";
import SingleMoviePage from "./SingleMoviePage";
import ShowAllMovies from "./ShowAllMovies.js";
import Banner from "./Home/Banner";

interface GoListenerInterface {
  movie: {};
  img: string;
  rating: number;
  title: string;
  popularity: number;
  foundMovies: [];
}

interface inputInterface {
  inputValue: string;
  movieList: [];
}

class SearchInput {
  movieList: [];
  movieSection: Element;
  moviesContainer: Element;
  main: Element;
  header: Element;
  input: Element;
  // mediaQuerySmall: MediaQueryList;
  // mediaQueryMedium: MediaQueryList;
  // mediaQueryMaxMedium: MediaQueryList;
  // mediaQueryLarge: MediaQueryList;
  banner: Element;

  constructor(
    movieList: [],
    movieSection: Element,
    moviesContainer: Element,
    main: Element,
    header: Element,
    input: Element,
    // mediaQuerySmall: MediaQueryList,
    // mediaQueryMedium: MediaQueryList,
    // mediaQueryMaxMedium: MediaQueryList,
    // mediaQueryLarge: MediaQueryList,
    banner: Element
  ) {
    (this.movieList = movieList),
      (this.movieSection = movieSection),
      (this.moviesContainer = moviesContainer),
      (this.main = main),
      (this.header = header),
      (this.input = input),
      // (this.mediaQuerySmall = mediaQuerySmall),
      // (this.mediaQueryMedium = mediaQueryMedium),
      // (this.mediaQueryMaxMedium = mediaQueryMaxMedium),
      // (this.mediaQueryLarge = mediaQueryLarge),
      (this.banner = banner);
  }

  goListener(): void {
    let movieList: [];

    let inputValue: string;

    // change input to title case
    function toTitleCase(inputValue: string): string {
      return inputValue.replace(/\w\S\*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    function handleShowMoviesNow(inputValue: string): void {
      // return and bind found movies

      let foundMovies = this.movieList.filter(
        (movie: GoListenerInterface): object => {
          const { title } = movie;

          if (title.includes(inputValue)) {
            return movie;
          }
        }
      );

      // remove existing children in dom
      this.main.replaceChildren();
      //   replace with filter movies
      this.moviesContainer.innerHTML = foundMovies
        .map((movie: GoListenerInterface) => {
          return Movie(movie);
        })
        .join("");
      this.main.appendChild(this.moviesContainer);
    }
    // bind this to handle show now
    const handleMovieShow = handleShowMoviesNow.bind(this);

    // show single movie page on click below
    function singleMoviePageGo() {
      SingleMoviePage(
        this.movieList,
        this.movieSection,
        this.main,
        this.header,
        this.input,
        this.moviesContainer,
        this.banner
      );
    }
    // bind this to handle movie page show now
    const handleSingleMoviePageshow = singleMoviePageGo.bind(this);

    // ************************************************************
    this.input.addEventListener(
      "keyup",
      // this is an event
      function captureInput() {
        // capture input value, set it to helper title case function
        inputValue = this.value;
        toTitleCase(inputValue);
        handleMovieShow(inputValue);

        // resize movies container here
        // ***********************************QUERIES
        //   -----------------------------Phone
        // handles width change
        // function handlePhoneChange<Type>(query: Type) {
        //   if (query.matches) {
        //     this.moviesContainer.style.cssText =
        //       "grid-template-columns: repeat(2, 153px); justify-content: center;";
        //   }
        // }
        // // injetcs the query into the function
        // handlePhoneChange<MediaQueryList>(mediaQuerySmall);
        // // listens for width change
        // this.mediaQuerySmall.addListener(handlePhoneChange);

        // //   -----------------------------Tablet
        // function handleTabletChange<T>(query: MediaQueryList) {
        //   if (query.matches) {
        //     this.moviesContainer.style.cssText =
        //       "grid-template-columns: repeat(4, 216px);";
        //   }
        // }
        // handleTabletChange(mediaQueryMedium);
        // this.mediaQueryMedium.addListener(handleTabletChange);

        // //   -----------------------------laptop
        // function handleLaptopChange<T>(query: MediaQueryList) {
        //   if (query.matches) {
        //     this.moviesContainer.style.cssText =
        //       "grid-template-columns: repeat(6, 283px);";
        //   }
        // }
        // handleLaptopChange(mediaQueryLarge);
        // this.mediaQueryLarge.addListener(handleLaptopChange);

        // once movie is clicked, create single movie page with parsed information
        try {
          document.querySelector(".movies_movie").addEventListener(
            "click",
            handleSingleMoviePageshow,

            false
          );
        } catch (err) {
          console.log("No movies found.");
        }
      },
      false
    );
  }
}

export default SearchInput;

