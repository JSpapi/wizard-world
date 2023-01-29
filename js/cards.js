export const cardsFn = () => {

	const API_URL = `https://hp-api.onrender.com/api/characters`;

	const getData = async ()=> {
		
	}


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
        console.log("staff");
        break;
    }
  });
};
