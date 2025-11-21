// ======================================
// Schedule Page Button (Event-Driven JS)
// ======================================
const scheduleButton = document.getElementById("loadScheduleBtn");

if (scheduleButton) {
  scheduleButton.addEventListener("click", () => {
    alert("This feature will load your class schedule soon!");
  });
}

// ======================================
// Future Dining API Placeholder
// ======================================
const diningAPI = "https://api.placeholder.com/menu";
// TODO: Replace with real dining API if added in future.

// ======================================
// Daily Devotion API Integration
// Uses labs.bible.org API to fetch a random Bible verse.
// Demonstrates event-driven programming + API usage.
// ======================================
const devotionButton = document.getElementById("dailyDevotionBtn");
const devotionText = document.getElementById("devotionText");

if (devotionButton && devotionText) {
  devotionButton.addEventListener("click", async () => {
    try {
      const response = await fetch(
        "https://labs.bible.org/api/?passage=random&type=json"
      );
      const data = await response.json();

      const verse = data[0];
      devotionText.textContent = `${verse.bookname} ${verse.chapter}:${verse.verse} — ${verse.text}`;
    } catch (error) {
      devotionText.textContent =
        "Sorry, the devotion could not be loaded right now.";
      console.error("Devotion API error:", error);
    }
  });
}
