const highlightTips = () => {
  const tips = document.querySelectorAll(".tip");

  tips.forEach(tip => {
    tip.addEventListener("mouseover", () => tip.classList.add("tipsHighlight"));
    tip.addEventListener("mouseout", () =>
      tip.classList.remove("tipsHighlight")
    );
  });
};

export default highlightTips;
