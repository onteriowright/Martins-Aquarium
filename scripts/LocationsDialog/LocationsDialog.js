const initializeDetailButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll(".button--close");

  allCloseButtons.forEach(btn => {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  });

  //Reference AllLocationsDetailButtons

  const AllLocationsDetailButtons = document.querySelectorAll(
    "button[id^= 'button--']"
  );

  //This function loops through all the location detail buttons
  AllLocationsDetailButtons.forEach(btn => {
    btn.addEventListener("click", theEvent => {
      const dialogElement = document.querySelector(
        `#${theEvent.target.id} + dialog`
      );
      dialogElement.showModal();
    });
  });
};

export default initializeDetailButtonEvents;
