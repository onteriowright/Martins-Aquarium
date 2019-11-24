import { useFish } from "./FishDataProvider.js";
import FishComponent from "./Fish.js";

const FishListComponent = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishies");
  const fishes = useFish();

  let allFishHTML = "";
  fishes.forEach(fish => {
    const fishHTML = FishComponent(fish);
    allFishHTML += fishHTML;
  });

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="content">
            ${allFishHTML}
      </section>
  `;
};

export default FishListComponent;
