import { createInfoCards } from "./cards.js";

// !CREATE CARDS DEPENDING ON HOUSE
export const houseFilter = (data, infoCardsParent) => {
  const houseFilterBtn = document.querySelectorAll(".house__nav-item");

  houseFilterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      infoCardsParent.classList.remove("show");
      // todo DATA has GAINed WITH DATASET
      // const houseName2 = e.target.dataset.house;

      const houseName = e.target.innerText;
      if (houseName === "All") {
        setTimeout(() => {
          createInfoCards(data, infoCardsParent);
          infoCardsParent.classList.add("show");
        }, 1500);
      } else {
        setTimeout(() => {
          createInfoCards(newCards, infoCardsParent);
          infoCardsParent.classList.add("show");
        }, 1500);
        const newCards = data.filter((card) => card.house === houseName);
      }
    });
  });
};
