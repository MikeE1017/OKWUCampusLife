# 📌 OKWU Campus Life Web App

A responsive, student-focused campus utility for Oklahoma Wesleyan University

The OKWU Campus Life web application is a modern, mobile-friendly, and accessible platform designed to help students stay connected with campus life — including dining hours, chapel events, community engagement, and more. The web app integrates real-time features through JavaScript and APIs while maintaining a clean, professional, user-focused UI using Bootstrap.

---

# 🎯 Project Purpose  
The OKWU Campus Life app brings together key campus resources—maps, dining info, events, chapel devotions, and schedule features—into a clean, modern interface.

---

# 🛠️ Technical Overview
| Requirement             | Implementation                                                            |
| ----------------------- | ------------------------------------------------------------------------- |
| Semantic HTML           | `<main>`, `<section>`, `<header>`, `<nav>`, `<footer>`                    |
| Custom CSS              | `/css/style.css`                                                          |
| Responsive Design       | Bootstrap grid + custom media queries                                     |
| Event-Driven JavaScript | Buttons that trigger dynamic rendering & fetch calls                      |
| Dynamic Content         | External API + two custom JSON APIs                                       |
| Accessibility           | ARIA labels, alt text, role attributes, high-contrast UI                  |
| Deployment              | Hosted live on GitHub Pages (https://mikee1017.github.io/OKWUCampus_Life/)|
---

# 🧩 Code Architecture 
OKWUCampus_Life/
│
├── index.html          (Home)
├── map.html            (Campus Map)
├── dining.html         (Dining Schedule)
├── schedule.html      (Add & save your weekly class schedule — LocalStorage)
├── events.html         (Dynamic Events)
├── community.html      (Prayer & Support Wall)
│
├── /css/style.css      (custom styling)
├── /js/script.js       (JS interactivity + APIs)
├── /js/okwu-events.json   (custom events JSON API)
├── /js/chapel-events.json (custom chapel JSON API)
│
└── README.md


---

# 🚀 Features

# 🧭 Smart Navigation

Accessible <nav> with ARIA labels and fully responsive mobile menu

# 🕒 Today’s Event Highlight

Home page automatically loads today’s OKWU event based on the current date

# 🎟 Dynamic Event Listings

Two separate event APIs provide live-loaded content:

OKWU Events (custom JSON API)

Chapel Services (custom JSON API)

✝️ Daily Devotion Generator

Fetches a random Bible verse from an external API
https://labs.bible.org/api/?passage=random&type=json

# 💬 Prayer & Support Wall

Community feature where students can post:

Prayer requests

Encouragement

Campus support messages
✨ Stored in LocalStorage, so messages persist between sessions

# 🍽 Dining & Coffee Info

Clear weekly dining schedule + Doc Lacy’s hours — mobile-friendly tables

# 🗺 Campus Map

Campus map image embedded on the home page with responsive scaling

---

# 🚀 How to Run the Project  
You can visit the live version here:  
**[GitHub Pages URL](https://mikee1017.github.io/OKWUCampus_Life/)**

To run locally:

1. Clone the repository:
git clone https://github.com/MikeE1017/OKWUCampus_Life.git
2. Open the folder in VS Code  
3. Open **index.html** in your browser  
4. Enjoy the full app experience  

---

# 🌐 API & Data Integration
External API

✔ Bible verse devotion API
(Used on Community page)

Local JSON APIs

Two custom JSON APIs (OKWU Events + Chapel Events) are dynamically fetched to satisfy the external data/API requirement.

✔ OKWU Campus Events
✔ Chapel Service Events

---

# 🔒 Accessibility Commitment

ARIA-labeled navigation links

Proper semantic hierarchy

Dark-on-light high-contrast readability

All images include descriptive alt text

Mobile-first layout ensures universal usability

---

# 📝 Credits  
- Daily Bible verses: **labs.bible.org API**  
- Chapel events data: Custom JSON file created for academic use  
- Campus map screenshot © Oklahoma Wesleyan University  
- Bootstrap CSS framework via jsDelivr CDN  

---

# 🧪 Testing Summary

Tested using Chrome DevTools across:

📱 Mobile

💻 Tablet

🖥 Desktop

All links, APIs, layout, and UI components load correctly on GitHub Pages.

---

# 📈 Future Enhancements (Roadmap)

Personal class schedule feature using secure login

Chapel attendance check-in integration

Real cafeteria menu feed (API, if Pioneer College Caterers releases access)

User avatars + moderation features for community posts

---

# 👤 About the Developer

Built by Michael Ellis
Cybersecurity major, Oklahoma Wesleyan University
Focused on building safe, accessible, user-first digital tools