const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close");

  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }

  document
    .querySelector("#button--Greece")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Greece");
      theDialog.showModal();
    });
  document
    .querySelector("#button--Alaska")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Alaska");
      theDialog.showModal();
    });
  document
    .querySelector("#button--Canada")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Canada");
      theDialog.showModal();
    });
};

export default initializeDetailButtonEvents;
