const LocationsTipsComponent = tips => {
  return `
  <div class="locationsTips">
    <div class="tips">
      <h4>${tips.title}</h4>
        <p>
         ${tips.information}
        </p>
    </div>
  </div>
  
  `;
};

export default LocationsTipsComponent;
