const modal = document.getElementById("modal");
const contactInfo = document.getElementById("contact-info");
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const firstInput = document.getElementById("name");
const submitButton = document.getElementById("submit-button");

let modalIsDisplayed = false;

let keysPressed = [];

firstInput.addEventListener("keydown", (event) => {
  event.preventDefault();
  event.key === "Tab" && document.getElementById("email").focus();
});

submitButton.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && !keysPressed.includes("Shift")) {
    event.preventDefault();
  }
});

modal.addEventListener("keydown", (event) => {
  keysPressed.push(event.key);
});

modal.addEventListener("keyup", (event) => {
  keysPressed = [];
});

modal.addEventListener("keydown", (event) => {
  event.key === "Escape" && hideModal(event);
});

const displayModal = () => {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  contactInfo.setAttribute("aria-hidden", "true");
  header.setAttribute("aria-hidden", "true");
  footer.setAttribute("aria-hidden", "true");
  firstInput.focus();
};

const hideModal = (event) => {
  //prevents page reload
  event.preventDefault();
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  contactInfo.setAttribute("aria-hidden", "false");
  header.setAttribute("aria-hidden", "false");
  footer.setAttribute("aria-hidden", "false");
  emptyInputFields();
};

const toggleModal = (event) => {
  modalIsDisplayed ? hideModal(event) : displayModal();
  modalIsDisplayed = !modalIsDisplayed;
};

const emptyInputFields = () => {
  for (let input of document.querySelectorAll("input, textarea"))
    input.value = "";
};
