import { createInfoCards } from "./cards.js";
// !SEARCH
export const search = (data, infoCardsParent) => {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const newCards = data.filter(
      (card) =>
        card.name.toLowerCase().includes(inputValue) ||
        card.house.toLowerCase().includes(inputValue)
    );
    if (!newCards.length) {
      infoCardsParent.innerHTML = `<h2>no such dick</h2>`;
      infoCardsParent.style.display = "block";
    } else {
      createInfoCards(newCards, infoCardsParent);
      infoCardsParent.style.display = "grid";
    }
  });
};
