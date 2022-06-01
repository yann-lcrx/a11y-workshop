const modal = document.getElementById("modal");
const contactInfo = document.getElementById("contact-info");
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const firstInput = document.getElementById("name");
const submitButton = document.getElementById("submit-button");

let modalIsDisplayed = false;

let keysPressed = [];

const displayModal = (event) => {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
    emptyInputFields();
    modalIsDisplayed = false;
  }, 5000);
};

const hideModal = (event) => {
  //prevents page reload
  event.preventDefault();
  modal.style.display = "none";
  emptyInputFields();
};

const toggleModal = (event) => {
  modalIsDisplayed ? hideModal(event) : displayModal(event);
  modalIsDisplayed = !modalIsDisplayed;
};

const emptyInputFields = () => {
  for (let input of document.querySelectorAll("input, textarea"))
    input.value = "";
};
