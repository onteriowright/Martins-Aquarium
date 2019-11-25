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
    .querySelector("#button--Lucky")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Lucky");
      theDialog.showModal();
    });
  document
    .querySelector("#button--Maria")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Maria");
      theDialog.showModal();
    });
  document
    .querySelector("#button--Lil__Jon")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Lil__Jon");
      theDialog.showModal();
    });
  document
    .querySelector("#button--Tammie")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Tammie");
      theDialog.showModal();
    });
  document
    .querySelector("#button--Mike")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Mike");
      theDialog.showModal();
    });
  document
    .querySelector("#button--Elvis")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--Elvis");
      theDialog.showModal();
    });
};

export default initializeDetailButtonEvents;
