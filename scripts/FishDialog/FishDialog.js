const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close");

  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }
  // CAN'T TOUCH THIS - END
  const allDetailButtons = document.querySelectorAll(".button--open");
  allDetailButtons.forEach(btn => {
    btn.addEventListener("click", event => {
      const theDialog = document.querySelector(`#${event.target.id} + dialog`);
      theDialog.showModal();
    });
  });
};

export default initializeDetailButtonEvents;
