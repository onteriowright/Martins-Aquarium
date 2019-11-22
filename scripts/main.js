import initializeDetailButtonEvents from "./dialog.js";
import addMouseOverEventListeners from "./highlight.js";
import hightlightTips from "./tips.js";
import { useFish } from "./FishDataProvider.js";

initializeDetailButtonEvents();
addMouseOverEventListeners();
hightlightTips();
const allOfFish = useFish();

for (const fish of allOfFish) {
  console.log(fish);
}
