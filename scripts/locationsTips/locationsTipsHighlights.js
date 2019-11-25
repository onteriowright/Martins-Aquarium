const locationsTipsHighlights = () => {
  const tipsHighlights = document.querySelectorAll(".locationsTips");
  for (const tipsHighlight of tipsHighlights) {
    tipsHighlight.addEventListener("mouseover", tipsEvent => {
      tipsHighlight.className = "tipsHighlightsSections";
    });
    tipsHighlight.addEventListener("mouseout", tipsEvent => {
      tipsHighlight.className = "";
    });
  }
};

export default locationsTipsHighlights;
