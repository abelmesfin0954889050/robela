const bioText = document.getElementById("bio-text");
const text = "Dear Robel, Happy New Year 2025, my dear cousin! 🎉 I hope this year brings you joy, success, and good health.May you achieve everything you’ve set out to do, and may your dreams come true. I'm so thankful for our bond and all the great memories we've shared. I'm excited for all the new moments and adventures we’ll experience in 2025 Best wishes for an amazing year ahead! With love, Abel";
let index = 0;
let currentLine = ""; // To keep track of the current line

function typeText() {
  if (index < text.length) {
    // Add the next character to the line
    currentLine += text.charAt(index);
    bioText.textContent = currentLine; // Update the text content

    // Check if the text exceeds the container width
    if (bioText.offsetWidth > bioText.parentElement.offsetWidth) {
      currentLine = currentLine.trim().slice(0, -1); // Remove the last character
      bioText.textContent = currentLine + "\n"; // Add a line break
    }

    index++; // Move to the next character
    setTimeout(typeText, 100); // Speed of typing (100ms per character)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeText(); // Trigger the typing animation when the page is ready
});
