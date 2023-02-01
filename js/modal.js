// ! CREATE  INFO MODAL
export const createInfoModal = (data, moreInfoBtns) => {
  const modalParent = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  moreInfoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.modal;
      const modal = data.filter((card) => card.id === id);

      modalParent.innerHTML = modal
        .map(
          ({
            id,
            image,
            name,
            alternate_actors,
            species,
            gender,
            house,
            dateOfBirth,
            wizard,
            ancestry,
            eyeColour,
            hairColour,
            wand,
            patronus,
            actor,
            alive,
          }) =>
            `
        <div class="modal__content">
          <div class="modal__content-header">
            <img src="../images/ghost3.gif" data-src="${
              image
                ? image
                : gender === "male"
                ? `./images/male-unkn.jpg`
                : `./images/female-unkn.png`
            }" alt="${name}" />
            <h2 class="modal__content-title">Acter: ${
              actor ? actor : `no info`
            }</h2>
            <p class="modal__content-subtitle">
              Alternate actors:
              ${
                alternate_actors.length
                  ? alternate_actors.map((alter) => `<span>${alter}</span>`)
                  : `No alternate actors`
              }
            </p>
            <span class="close">&times;</span>
          </div>
          <div class="modal__content-body">
            <div class="body-line">
              <p class="modal__content-info">Character: ${
                name ? name : `no info`
              }</p>
              <p class="modal__content-info">Species: ${
                species ? species : `no info`
              }</p>
              <p class="modal__content-info">Status: ${
                alive ? `alive` : `dead`
              }</p>
              <p class="modal__content-info">Ancestry: ${
                ancestry ? ancestry : `no info`
              }</p>
            </div>
            <div class="body-line">
              <p class="modal__content-info">Gender: ${
                gender ? gender : `no info`
              }</p>
              <p class="modal__content-info">Date of birth: ${
                dateOfBirth ? dateOfBirth : `no info`
              }</p>
              <p class="modal__content-info">Eye colour: ${
                eyeColour ? eyeColour : `no info`
              }</p>
              <p class="modal__content-info">Hair colour: ${
                hairColour ? hairColour : `no info`
              }</p>
            </div>
            <div class="body-line">
              <p class="modal__content-info">Licence: ${
                wizard ? `Wizard` : `Muggle`
              }</p>
              <p class="modal__content-info">Patronus: ${
                patronus ? patronus : `no info`
              }</p>
              <p class="modal__content-info">
                Wand: Wood => ${wand.wood ? wand.wood : `no info`}, Core => ${
              wand.core ? wand.core : `no info`
            }, Length => ${wand.length ? wand.length : `no info`} inch
              </p>
            </div>
          </div>

          <div class="modal__content-footer">
            <p class="modal__content-house">House: <span> ${
              house ? house : `no info`
            }</span></p>
            <p class="modal__content-crest" >
              Crest: <img src="../images/ghost3.gif" alt="${house}" />
            </p>
          </div>
        </div>
        `
        )
        .join("");

      overlay.classList.add("active");
      modalParent.classList.add("show");

      const modalHideBtn = document.querySelector(".close");
      const modalCrests = document.querySelector(".modal__content-house span");
      const modalCrestImg = document.querySelector(".modal__content-crest img");
      const modalImg = document.querySelector(".modal__content-header img");

      setTimeout(() => {
        // !CREATE CRESTS DEPENDING ON HOUSE
        createCrestForModal(modalCrests, modalCrestImg);
        // !PRELOADER FOR IMAGES
        imgLoader(modalImg);
      }, 2000);

      modalHideBtn.addEventListener("click", modalHide);
      overlay.addEventListener("click", modalHide);
    });
  });
  // !HIDE MODAL FN
  function modalHide() {
    overlay.classList.remove("active");
    modalParent.classList.remove("show");
  }
};

// !CREATE CRESTS DEPENDING ON HOUSE
const createCrestForModal = (modalCrests, modalCrestImg) => {
  switch (modalCrests.innerText) {
    case "Gryffindor":
      modalCrestImg.src = `./images/Gryffindor.jpg`;
      break;
    case "Slytherin":
      modalCrestImg.src = `./images/Slytherin.webp`;
      break;
    case "Ravenclaw":
      modalCrestImg.src = `./images/Ravenclaw.jpg`;
      break;
    case "Hufflepuff":
      modalCrestImg.src = `./images/Hufflepuff.jpg`;
      break;
    default:
      modalCrestImg.src = `./images/hg.webp`;
      break;
  }
};

// !PRELOADER FOR IMAGES
function imgLoader(modalImg) {
  const newUrl = modalImg.getAttribute("data-src");
  modalImg.src = newUrl;
}
