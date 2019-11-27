import { UseFish } from "./FishDataProvider.js";
import FishComponent from "./Fish.js";

const FishListComponent = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishies");
  const fishes = UseFish();

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="content">
            ${fishes.map(fish => FishComponent(fish)).join("")}
      </section>
  `;
};

export default FishListComponent;
