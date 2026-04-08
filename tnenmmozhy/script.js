// Order button alert
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("🍦 Thank you for your order! Your ice cream is being prepared.");
  });
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.textContent = "✅ Your message has been sent successfully!";
  contactForm.reset();
});