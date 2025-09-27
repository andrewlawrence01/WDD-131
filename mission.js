// Select the dropdown and the logo 
const themeSelector = document.querySelector("#theme-selector");
const body = document.body;
const logo = document.querySelector(".logo");

// Function to apply theme
function changeTheme() {
  if (themeSelector.value === "dark") {
    body.classList.add("dark");
    logo.src = "byui-logo_white.png"; // white logo for dark background
  } else {
    body.classList.remove("dark");
    logo.src = "byui-logo_blue.webp"; // blue logo for light background
  }
  // Save preference
  localStorage.setItem("theme", themeSelector.value);
}

// Load saved theme if any
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  themeSelector.value = savedTheme;
  changeTheme();
});

// Listen for theme changes
themeSelector.addEventListener("change", changeTheme);
