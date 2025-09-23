// form page
//alert('js connected');
//form validation
function validateForm(event) {
  event.preventDefault();
  let form = document.getElementById("contributeForm");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let food = document.getElementById("food");
  let centre = document.getElementById("centre");
  let message = document.getElementById("message");

  let nameError = document.getElementById("nameErr");
  let emailError = document.getElementById("emailErr");
  let foodError = document.getElementById("foodErr");
  let centreError = document.getElementById("centreErr");
  let messageError = document.getElementById("messageErr");

  //   reset all error messages
  nameError.style.display = "none";
  emailError.style.display = "none";
  foodError.style.display = "none";
  centreError.style.display = "none";

  let valid = true;

  if (name.value.trim() === "") {
    nameError.style.display = "block";
    valid = false;
  }

  if (!email.value.includes("@") || !email.value.includes(".") || !email.value.includes("ichat.sp.edu.sg")){
    emailError.style.display = "block";
    valid = false;
  }

  if (food.value.trim() === "") {
    foodError.style.display = "block";
    valid = false;
  }

  if (centre.value.trim() === "") {
    centreError.style.display = "block";
    valid = false;
  }

  if (message.value === "") {
    messageError.style.display = "block";
    valid = false;
  }

  if (valid) {
    alert("Submission Successful!");
    form.reset();
  }
}

//live character counter for mesasge textarea
// wait for the whole page to fully load so all elements exist before we use them then runs the function inside
document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.getElementById("message");
  const charCountDisplay = document.getElementById("charCount");

  //gets the length of text typed in box + updates the display irl
  messageInput.addEventListener("input", function () {
    const charCount = messageInput.value.length;
    charCountDisplay.textContent = `${charCount}/500 characters`;
  });
});

// info page
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const cards = document.querySelectorAll(".card-gallery");

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      if (text.includes(keyword)) {
        card.parentElement.style.display = "block"; // show card
      } else {
        card.parentElement.style.display = "none"; // hide card
      }
    });
  });
});
