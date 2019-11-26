const addMouseOverEventListeners = () => {
  const fishCards = document.querySelectorAll(".fishies__card");
  const locationsCards = document.querySelectorAll(".info");

  //FishCards Highlights

  fishCards.forEach(card => {
    card.addEventListener("mouseover", () =>
      card.classList.add("highlightFish")
    );
    card.addEventListener("mouseout", () =>
      card.classList.remove("highlightFish")
    );
  });

  //LocationsCards Highlights

  locationsCards.forEach(card => {
    card.addEventListener("mouseover", () =>
      card.classList.add("highlightLocations")
    );
    card.addEventListener("mouseout", () =>
      card.classList.remove("highlightLocations")
    );
  });
};
export default addMouseOverEventListeners;
