// === VIEW MY WORK BUTTON ===
let viewWorkBtn = document.getElementById("viewWorkBtn");
viewWorkBtn.addEventListener("click", function() {
  let skillsSection = document.getElementById("skills");
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

// === CONTACT FORM ===
let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let message = document.getElementById("messageInput").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
    return;
  }

  let successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  contactForm.reset();

  setTimeout(function() {
    successMessage.style.display = "none";
  }, 5000);
});