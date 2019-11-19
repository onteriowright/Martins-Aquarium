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

  // You will be writing code below this line
  document
    .querySelector("#button--bitey")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--bitey");
      theDialog.showModal();
    });
  document
    .querySelector("#button--grady")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--grady");
      theDialog.showModal();
    });
  document
    .querySelector("#button--rocky")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--rocky");
      theDialog.showModal();
    });
  document
    .querySelector("#button--bas")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--bas");
      theDialog.showModal();
    });
  document
    .querySelector("#button--john")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--john");
      theDialog.showModal();
    });
  document
    .querySelector("#button--piper")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--piper");
      theDialog.showModal();
    });
};

export default initializeDetailButtonEvents;
