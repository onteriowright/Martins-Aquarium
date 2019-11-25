import { useLocationsTips } from "./LocationsTipsDataProvider.js";
import LocationsTipsComponent from "./LocationsTips.js";

const locationsTipsListComponent = () => {
  const locationsTipsContentElement = document.querySelector(".location-tips");
  const LocationsTips = useLocationsTips();

  locationsTipsContentElement.innerHTML += `
     <section>
      <h1>My Expert Tips</h1>
        ${LocationsTips.map(tip => LocationsTipsComponent(tip)).join("")}
    </section>
  `;
};

export default locationsTipsListComponent;
