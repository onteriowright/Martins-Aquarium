import { useLocations } from "./LocationDataProvider.js";
import LocationsComponent from "./Locations.js";

const locationsListComponent = () => {
  const locationsContentElement = document.querySelector(".locations-content");
  const locations = useLocations();

  locationsContentElement.innerHTML += `
      <section class="content">
          ${locations.map(location => LocationsComponent(location)).join("")}
      </section>
  `;
};
export default locationsListComponent;
