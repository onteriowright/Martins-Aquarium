import { useLocations } from "./LocationDataProvider.js";
import { useLocationsTips } from "../LocationsTips/LocationsTipsDataProvider.js";
import locationsListComponent from "./LocationList.js";
import locationsTipsListComponent from "../LocationsTips/LocationsTipList.js";
import addMouseOverEventListeners from "../Highlights/Highlight.js";
import initializeDetailButtonEvents from "../LocationsDialog/LocationsDialog.js";
import locationsTipsHighlights from "../LocationsTips/LocationsTipsHighlights.js";

useLocations();
useLocationsTips();
locationsListComponent();
locationsTipsListComponent();
addMouseOverEventListeners();
initializeDetailButtonEvents();
locationsTipsHighlights();
