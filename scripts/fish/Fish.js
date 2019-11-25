const FishComponent = fish => {
  return `
      <div class="fishies__card">
          <div>
              <img class="fish__size" src="${fish.image}" alt="">
          </div>
          <div class="fish__name"><h4>${fish.name}</h4></div>
          <button id="button--${fish.name}">Details</button>

          <dialog class="dialog--fish" id="details--${fish.name}">
              <div class="dialog--tips">Species: ${fish.species}</div>
              <div class="dialog--tips">Location: ${fish.location}</div>
              <div class="dialog--tips">Length: ${fish.length}</div>
              <div class="dialog--tips">Food: ${fish.food.join(", ")}</div>

              <button class="button--close">Close Dialog</button>
          </dialog>
      </div>
  `;
};

export default FishComponent;
