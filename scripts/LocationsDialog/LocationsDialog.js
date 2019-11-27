const InitializeDetailButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll(".button--close");

  allCloseButtons.forEach(btn => {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  });

  //Reference AllLocationsDetailButtons

  const allLocationsDetailButtons = document.querySelectorAll(
    "button[id^= 'button--']"
  );

  //This function loops through all the location detail buttons
  allLocationsDetailButtons.forEach(btn => {
    btn.addEventListener("click", theEvent => {
      const dialogElement = document.querySelector(
        `#${theEvent.target.id} + dialog`
      );
      dialogElement.showModal();
    });
  });
};

export default InitializeDetailButtonEvents;
