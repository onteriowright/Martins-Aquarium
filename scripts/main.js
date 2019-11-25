import { useFish } from "./Fish/FishDataProvider.js";
import { useTips } from "./FishTips/TipDataProvider.js";
import FishListComponent from "./Fish/FishList.js";
import TipsListComponent from "./FishTips/TipList.js";
import addMouseOverEventListeners from "./Highlights/Highlight.js";
import initializeDetailButtonEvents from "./FishDialog/FishDialog.js";
import highlightTips from "./FishTips/TipHighlight.js";

useFish();
useTips();
FishListComponent();
TipsListComponent();
addMouseOverEventListeners();
initializeDetailButtonEvents();
highlightTips();
