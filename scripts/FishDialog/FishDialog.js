const initializeDetailButtonEvents = () => {
  //Reference to all close buttons
  const allCloseButtons = document.querySelectorAll(
    "button[class^='button--']"
  );

  //This function loops through all close buttons and add event listener
  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }
  //Reference allDetailButtons
  const allDetailButtons = document.querySelectorAll("button[id^= 'button--']");
  //This function loops through all detail buttons and add event listener
  allDetailButtons.forEach(btn => {
    btn.addEventListener("click", event => {
      const theDialog = document.querySelector(`#${event.target.id} + dialog`);
      theDialog.showModal();
    });
  });
};

export default initializeDetailButtonEvents;
