// ! CREATE  INFO MODAL
export const createInfoModal = (data, moreInfoBtns) => {
  const modalParent = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  moreInfoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.modal;
      overlay.classList.add("active");
      modalParent.classList.add("show");

      const modal = data.filter((char) => char.id === id);
      modalParent.innerHTML = modal.map(
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
            <img src="${
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
              <p class="modal__content-info">Gender: ${
                dateOfBirth ? dateOfBirth : `no info`
              }</p>
              <p class="modal__content-info">Eye colour: ${
                eyeColour ? eyeColour : `no info`
              }</p>
              <p class="modal__content-info">Hair colour: ${
                hairColour ? hairColour : `no info`
              }</p>
              <p class="modal__content-info">Patronus: ${
                patronus ? patronus : `no info`
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
            <p class="modal__content-house">House: <span>${house}</span></p>
            <p class="modal__content-crest" >
              Crest: <img src="./images/hf.jpg" alt="" />
            </p>
          </div>
        </div>
        
        `
      );
      const modalHideBtn = document.querySelector(".close");

      modalHideBtn.addEventListener("click", modalHide);
      overlay.addEventListener("click", modalHide);
    });
  });
  function modalHide() {
    overlay.classList.remove("active");
    modalParent.classList.remove("show");
  }
};
