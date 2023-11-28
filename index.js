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

function refreshImages() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(gridItem => {
      const images = gridItem.querySelectorAll('img');

      images.forEach(image => {
          // Generate a random query parameter to prevent browser caching
          const randomQueryParam = Math.random().toString(36).substring(7);
          const src = image.getAttribute('src');
          // Append the random query parameter to the image source to force a refresh
          image.setAttribute('src', src + '?' + randomQueryParam);
      });
  });
}

// Refresh the images initially
refreshImages();

// Set up the interval to refresh images every 5 minutes
setInterval(refreshImages, 15* 60 * 1000); // 15 minutes in milliseconds

function updateTimestamp() {
  const timestampElement = document.getElementById('refresh-date');
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  const formattedTime = hours + ':' + minutes;


  timestampElement.textContent = ' ' + formattedTime;
}

updateTimestamp();
setInterval(updateTimestamp, 15 * 60 * 1000);
