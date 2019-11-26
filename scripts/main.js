import FishListComponent from "./Fish/FishList.js";
import TipsListComponent from "./FishTips/TipList.js";
import addMouseOverEventListeners from "./Highlights/Highlight.js";
import initializeDetailButtonEvents from "./FishDialog/FishDialog.js";
import highlightTips from "./FishTips/TipHighlight.js";

FishListComponent();
TipsListComponent();
addMouseOverEventListeners();
initializeDetailButtonEvents();
highlightTips();
