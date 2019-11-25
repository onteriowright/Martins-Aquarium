import { useLocations } from "../locations/LocationDataProvider.js";
import { useLocationsTips } from "../locationsTips/locationsTipsDataProvider.js";
import locationsListComponent from "../locations/LocationList.js";
import locationsTipsListComponent from "../locationsTips/locationsTipList.js";
import addMouseOverEventListeners from "../../scripts/highlights/Highlight.js";
import initializeDetailButtonEvents from "../../scripts/locations/LocationsDialog.js";
import locationsTipsHighlights from "../locationsTips/locationsTipsHighlights.js";

useLocations();
useLocationsTips();
locationsListComponent();
locationsTipsListComponent();
addMouseOverEventListeners();
initializeDetailButtonEvents();
locationsTipsHighlights();
