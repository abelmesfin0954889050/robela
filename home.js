document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const homeContainer = document.querySelector(".home-container");

  // Remove the loading screen after 3 seconds
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    homeContainer.classList.remove("hidden");
  }, 3000); // Matches the animation duration
});
