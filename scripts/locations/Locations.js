const LocationsComponent = locations => {
  return `
  <div class="info">
    <div>
        <img class="image-size" src="${locations.image}" alt="" />
    </div>
    <div><h4>${locations.name}</h4></div>
    <button id="button--${locations.name}" class="btn">Details</button>

    <dialog id="details--${locations.name}" class="dialog-info">
        <div class="info-tips">Weather: ${locations.weather}</div>
        <div class="info-tips">Landscape: ${locations.landscape}</div>
        <div class="info-tips">Water Depth: ${locations.waterDepth}</div>

        <button class="button--close">Close Dialog</button>
    </dialog>
  </div>`;
};

export default LocationsComponent;
