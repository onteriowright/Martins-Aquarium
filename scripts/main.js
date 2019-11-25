import { useFish } from "./fish/FishDataProvider.js";
import { useTips } from "./tips/TipDataProvider.js";
import FishListComponent from "./fish/FishList.js";
import TipsListComponent from "./tips/TipList.js";
import addMouseOverEventListeners from "./highlights/Highlight.js";
import initializeDetailButtonEvents from "./dialog/Dialog.js";
import highlightTips from "./tips/TipHighlight.js";

useFish();
useTips();
FishListComponent();
TipsListComponent();
addMouseOverEventListeners();
initializeDetailButtonEvents();
highlightTips();
