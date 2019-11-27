const LocationsTipsHighlights = () => {
  const tipsHighlights = document.querySelectorAll(".locationsTips");
  tipsHighlights.forEach(tipsHighlight => {
    tipsHighlight.addEventListener("mouseover", () =>
      tipsHighlight.classList.add("tipsHighlightsSections")
    );
    tipsHighlight.addEventListener("mouseout", () =>
      tipsHighlight.classList.remove("tipsHighlightsSections")
    );
  });
};

export default LocationsTipsHighlights;
