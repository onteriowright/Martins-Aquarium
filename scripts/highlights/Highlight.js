const addMouseOverEventListeners = () => {
  const fishCards = document.querySelectorAll(".fishies__card");
  const locationsCards = document.querySelectorAll(".info");

  for (const card of fishCards) {
    card.addEventListener("mouseover", theMouseOverEvent => {
      card.classList.add("highlightFish");
    });
    card.addEventListener("mouseout", theMouseOutEvent => {
      card.classList.remove("highlightFish");
    });
  }

  for (const locations of locationsCards) {
    locations.addEventListener("mouseover", theLocationsEvent => {
      locations.classList.add("highlightLocations");
    });
    locations.addEventListener("mouseout", theLocationsEvent => {
      locations.classList.remove("highlightLocations");
    });
  }
};

export default addMouseOverEventListeners;
