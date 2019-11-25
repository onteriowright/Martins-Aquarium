import { useLocationsTips } from "./LocationsTipsDataProvider.js";
import locationsTipsComponent from "./LocationsTips.js";

const locationsTipsListComponent = () => {
  const locationsTipsContentElement = document.querySelector(".location-tips");
  const locationsTips = useLocationsTips();

  let locationsTipsHTML = "";
  locationsTips.forEach(tip => {
    const tipsHTML = locationsTipsComponent(tip);
    locationsTipsHTML += tipsHTML;
  });

  locationsTipsContentElement.innerHTML += `
     <section>
      <h1>My Expert Tips</h1>
        ${locationsTipsHTML}
    </section>
  `;
};

export default locationsTipsListComponent;
