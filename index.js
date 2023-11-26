var nav = document.getElementById("nav");
var menuButton = document.getElementById("menu-icon");
var closeButton = document.getElementById("close-btn");
var gridContainer = document.getElementById("grid-container");
function toggleSidebar() {
  if (nav.classList.contains("nav-toggle")) {
    nav.classList.remove("nav-toggle");
    gridContainer.classList.remove("opacity");
  } else {
    nav.classList.add("nav-toggle");
    gridContainer.classList.add("opacity");
  }
}

menuButton.addEventListener("click", toggleSidebar);
closeButton.addEventListener("click", toggleSidebar);
