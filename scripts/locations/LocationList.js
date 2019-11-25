import { useLocations } from "./LocationDataProvider.js";
import locationsComponent from "./Locations.js";

const locationsListComponent = () => {
  const locationsContentElement = document.querySelector(".locations-content");
  const locations = useLocations();

  let allLocationsHTML = "";
  locations.forEach(location => {
    const locationsHTML = locationsComponent(location);
    allLocationsHTML += locationsHTML;
  });

  locationsContentElement.innerHTML += `
      <section class="content">
          ${allLocationsHTML}
      </section>
  `;
};
export default locationsListComponent;
