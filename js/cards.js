const API_URL = `https://hp-api.onrender.com/api/characters`;
// !GET ADATA FUNCTION
const getData = async () => {
  try {
    const { data } = await axios(API_URL);
    createInfoCards(data);
  } catch (err) {
    console.log(err.message);
  }
};

// !TRIGGER CARDS FUNCTION
export const cardsFn = () => {
  getData();
};
// !CREATE CARDS FUNCTION
function createInfoCards(data) {
  const infoCardsParent = document.querySelector(".info__cards");

  infoCardsParent.innerHTML = data
    .map(
      (card) =>
        `
			<article class="info__card">
				<div class="info__card-header">
					<img src="${card.image ? card.image : (card.gender === 'male' ? `./images/male-unkn.jpg` : `./images/female-unkn.png`)} " alt="" />
				</div>
				<div class="info__card-body">
					<p class="info__card-text">Name: ${card.name}</p>
					<p class="info__card-text">
					${card.hogwartsStudent ? `Hogwarts student` : (card.hogwartsStaff ? `Hogwarts staff` : `Not Hogwarts staff`) }
					</p>
					<p class="house">
					House:
					<span class="flag">${card.house ? card.house : 'haven knows'}</span>
					</p>
				</div>
				<span class="moreInfo">More info</span>
			</article>
		`
    )
    .join("");

  const housesFlag = document.querySelectorAll(".flag");

  housesFlag.forEach((flag) => {
    const infoCard = flag.closest(".info__card");

    switch (flag.innerText) {
      case "Gryffindor":
        infoCard.style.borderImageSource = `url("../images/grif.jpg")`;
        infoCard.style.borderImageSlice = `250`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#4e251d`;

        console.log(infoCard);
        break;
      case "Slytherin":
        infoCard.style.borderImageSource = `url('../images/sl.webp')`;
        infoCard.style.borderImageSlice = `180`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#044135`;
        console.log("Slytherin");
        break;
      case "Ravenclaw":
        infoCard.style.borderImageSource = `url("../images/rw.jpg")`;
        infoCard.style.borderImageSlice = `290`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#1f242c`;
        console.log("Ravenclaw");
        break;

      case "Hufflepuff":
        infoCard.style.borderImageSource = `url("../images/hf.jpg")`;
        infoCard.style.borderImageSlice = `100`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#a7854b`;
        console.log("Hufflepuff");
        break;

      default:
        infoCard.style.borderImageSource = `url("../images/hgw.webp")`;
        infoCard.style.borderImageSlice = `120`;
        infoCard.style.borderImageRepeat = `round`;
        infoCard.style.backgroundColor = `#3c3c3b`;
        console.log("staff");
        break;
    }
  });
}
