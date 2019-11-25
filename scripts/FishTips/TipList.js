import { useTips } from "./TipDataProvider.js";
import TipsComponent from "./Tips.js";

const TipsListComponent = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".tip-info");
  const tips = useTips();

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="content">
      <h1>My Expert Tips</h1>
            ${tips.map(tip => TipsComponent(tip)).join("")}
      </section>
  `;
};

export default TipsListComponent;
