const TipsComponent = tips => {
  return `
  <div class="tip">
  <div>
    <h4>${tips.title}</h4>
    <!-- description -->
    <p>
      ${tips.information}
    </p>
  </div>

</div>
  `;
};

export default TipsComponent;
