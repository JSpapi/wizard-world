export const headerFn = () => {
  const headerTop = document.querySelector(".header__top");
  const HouseNav = document.querySelector(".house__nav");

  function addNavbarBg() {
    headerTop.classList.add("color");
    HouseNav.classList.add("color");
  }
  function removeNavbarBg() {
    headerTop.classList.remove("color");
    HouseNav.classList.remove("color");
  }

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
      addNavbarBg();
    } else {
      removeNavbarBg();
    }
  });

  const navbarBg = document.querySelector(".header__fixed");

  navbarBg.addEventListener("mouseenter", addNavbarBg);
  navbarBg.addEventListener("mouseleave", removeNavbarBg);
};

export const animationTitle = () => {
  const headerTitle = document.querySelector(".header__title");
  const titles = [
    "Welcome to the Wizard World",
    "Enjoy discovering heroes and magic",
  ];

  let titlesIndex = 0;
  let characterIndex = 0;

  updateTitels();

  function updateTitels() {
    characterIndex++;
    headerTitle.innerHTML = `<span>${titles[titlesIndex].slice(
      0,
      characterIndex
    )}</span>`;

    if (characterIndex === titles[titlesIndex].length) {
      titlesIndex++;

      characterIndex = 0;
    }

    if (titlesIndex === titles.length) {
      titlesIndex = 0;
    }

    setTimeout(updateTitels, 300);
  }
};
