function Banner(
  header,
  banner,
  movies,
  mediaQuerySmall,
  mediaQueryMedium,
  mediaQueryMaxMedium,
  mediaQueryLarge
) {
  const getRandomMovie = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[getRandomMovie];

  const { backgroundImg, description, title } = randomMovie;
  // parse banner content with random movie data
  const bannerContent = `
    <div class="banner_img">
      <img src=${backgroundImg} alt=${title} />
    </div>
    <div class="banner_body">
      <h1 class="banner_heading">${title}</h1>
      <div>
        <h3 class="banner_text">${description}
        </h3>
        <a class="banner_text-show-more"> <strong> ...Show More </strong> </a>
    </div>
    </div>
  `;
  // append banner content
  banner.innerHTML = bannerContent;

  // show all of banner text when btn is clicked
  const bannerText = document.querySelector(".banner_text");
  const bannerTextBtn = document.querySelector(".banner_text-show-more");

  // add hide content class to banner text after text is made by js
  bannerText.classList.add("hide-content");

  const handlePhoneChange = (e) => {
    if (e.matches) {
      bannerTextBtn.addEventListener(
        "click",
        () => {
          bannerText.classList.toggle("hide-content");
          bannerText.classList.toggle("show-content");
        },
        false
      );
    }
  };
  handlePhoneChange(mediaQueryMaxMedium);
}

export default Banner;
