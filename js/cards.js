// ! MODAL SCRIPTS
import { createInfoModal } from "./modal.js";
import { houseFilter } from "./houseFilter.js";
import { search } from "./search.js";

const API_URL = `https://hp-api.onrender.com/api/characters`;
// !GET ADATA FUNCTION
const getData = async () => {
  try {
    const { data } = await axios(API_URL);
    // !CREATE CARDS FUNCTION
    const infoCardsParent = document.querySelector(".info__cards");
    createInfoCards(data, infoCardsParent);
    setTimeout(() => {
      infoCardsParent.classList.add("show");
    }, 1500);
    search(data, infoCardsParent);

    // !CREATE CARDS DEPENDING ON HOUSE
    houseFilter(data, infoCardsParent);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
};

// !TRIGGER CARDS FUNCTION
export const cardsFn = () => {
  getData();
};
// !CREATE CARDS FUNCTION
export function createInfoCards(data, infoCardsParent) {
  main;

  infoCardsParent.innerHTML = data
    .map(
      ({ id, image, gender, name, hogwartsStudent, hogwartsStaff, house }) =>
        `
			<article class="info__card">
				<div class="info__card-header">
					<img src="${
            image
              ? image
              : gender === "male"
              ? `./images/male-unkn.jpg`
              : `./images/female-unkn.png`
          }" alt="${house}"/>
				</div>
				<div class="info__card-body">
					<p class="info__card-text">Name: ${name}</p>
					<p class="info__card-text">
					${
            hogwartsStudent
              ? `Hogwarts student`
              : hogwartsStaff
              ? `Hogwarts staff`
              : `Not Hogwarts staff`
          }
					</p>
					<p class="house">
					House:
					<span class="crest">${house ? house : "haven knows"}</span>
					</p>
				</div>
				<span class="moreInfo" data-modal="${id}">More info</span>
			</article>
		`
    )
    .join("");

  // ! CARDS BORDER
  const houseCrests = document.querySelectorAll(".crest");
  createBordersForCards(houseCrests);

  const moreInfoBtns = document.querySelectorAll(".moreInfo");
  // ! CREATE  INFO MODAL
  createInfoModal(data, moreInfoBtns);
}
// ! CREATE CARDS BORDER IMAGE
const createBordersForCards = (houseCrests) => {
  houseCrests.forEach((crest) => {
    const infoCard = crest.closest(".info__card");

    switch (crest.innerText) {
      case "Gryffindor":
        infoCard.style.borderImageSource = `url("./images/Gryffindor.jpg")`;
        infoCard.style.borderImageSlice = `250`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#4e251d`;

        break;
      case "Slytherin":
        infoCard.style.borderImageSource = `url('./images/Slytherin.webp')`;
        infoCard.style.borderImageSlice = `180`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#044135`;
        break;
      case "Ravenclaw":
        infoCard.style.borderImageSource = `url("./images/Ravenclaw.jpg")`;
        infoCard.style.borderImageSlice = `290`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#1f242c`;
        break;

      case "Hufflepuff":
        infoCard.style.borderImageSource = `url("./images/Hufflepuff.jpg")`;
        infoCard.style.borderImageSlice = `100`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#a7854b`;
        break;

      default:
        infoCard.style.borderImageSource = `url("./images/hg.webp")`;
        infoCard.style.borderImageSlice = `120`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#3c3c3b`;
        break;
    }
  });
};
