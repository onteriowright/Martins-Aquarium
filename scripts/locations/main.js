import initializeDetailButtonEvents from "../../scripts/locations/LocationsDialog.js";
import addMouseOverEventListeners from "../../scripts/highlights/Highlight.js";
import { useLocations } from "../locations/LocationDataProvider.js";
import locationsListComponent from "../locations/LocationList.js";

useLocations();
locationsListComponent();
addMouseOverEventListeners();
initializeDetailButtonEvents();
