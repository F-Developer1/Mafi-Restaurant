// JavaScript to handle "See More" button functionality
document.addEventListener("DOMContentLoaded", () => {
    const seeMoreButtons = document.querySelectorAll(".see-more-btn");
    
    seeMoreButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("More information about this dish coming soon!");
      });
    });
  });

  // JavaScript to handle the mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", () => {
    // Toggle visibility of the nav menu
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });
});

  