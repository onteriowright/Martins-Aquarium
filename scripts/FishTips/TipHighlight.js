const highlightTips = () => {
  const tips = document.querySelectorAll(".tip");
  for (const tip of tips) {
    tip.addEventListener("mouseover", event => {
      tip.className = "tipsHighlight";
    });
    tip.addEventListener("mouseout", event => {
      tip.className = "";
    });
  }
};

export default highlightTips;
