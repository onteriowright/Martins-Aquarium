const hightlightTips = () => {
  const tips = document.querySelectorAll(".tips");
  for (const tip of tips) {
    tip.addEventListener("mouseover", event => {
      tip.className = "tipsHighlight";
    });
    tip.addEventListener("mouseout", event => {
      tip.className = "";
    });
  }
};

export default hightlightTips;
