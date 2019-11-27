import { useLocationsTips } from "./LocationsTipsDataProvider.js";
import LocationsTipsComponent from "./LocationsTips.js";

const LocationsTipsListComponent = () => {
  const locationsTipsContentElement = document.querySelector(".location-tips");
  const locationsTips = useLocationsTips();

  locationsTipsContentElement.innerHTML += `
     <section>
      <h1>Martins Expert Tips</h1>
        ${locationsTips.map(tip => LocationsTipsComponent(tip)).join("")}
    </section>
  `;
};

export default LocationsTipsListComponent;
