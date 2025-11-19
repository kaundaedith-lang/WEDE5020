/* Tab Functionality*/
function openTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => content.style.display = "none");

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).style.display = "block";

  const clickedButton = document.querySelector(button[onclick="openTab('${tabId}')"]);
  if (clickedButton) clickedButton.classList.add("active");
}

/*Accodion Functionality*/
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

/* Modal confirmation logic*/
const form = document.getElementById("contactForm");
const modal = document.getElementById("confirmationModal");
const closeBtn = document.querySelector(".close");
const confirmBtn = document.getElementById("confirmSend");
const cancelBtn = document.getElementById("cancelSend");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission
  modal.style.display = "block"; // show modal
});

closeBtn.onclick = () => modal.style.display = "none";
cancelBtn.onclick = () => modal.style.display = "none";

confirmBtn.onclick = () => {
  modal.style.display = "none";
  alert("Your message has been sent!"); // replace with actual submission logic later
  form.reset(); // clear the form
};

/*Leaflet map setup*/
const map = L.map('map').setView([-33.9249, 18.4241], 13); // Cape Town coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([-33.9249, 18.4241]).addTo(map)
  .bindPopup('Children’s Hospital Foundation Office')
  .openPopup();