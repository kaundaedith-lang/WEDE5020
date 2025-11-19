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