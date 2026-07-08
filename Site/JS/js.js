const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  
  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();


  if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
       formFeedback.textContent = "Veuillez entrer une adresse email Valide.";
} else {
  formFeedback.textContent = "Merci ! Votre message a été validé avec succès.";

  contactForm.reset();
}
})