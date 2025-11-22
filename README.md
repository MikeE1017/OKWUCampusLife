# OKWUCampusLife Web App
  
A multi-page responsive web application built to help Oklahoma Wesleyan University students access essential campus information in one simple interface. This project was developed as the final assignment for my Web Development course.

---

## 🎯 Project Purpose  
The OKWU Campus Life app brings together key campus resources—maps, dining info, events, chapel devotions, and schedule features—into a clean, modern interface. The goal is to demonstrate practical web development skills, including:

- Semantic HTML structure  
- Custom CSS and Bootstrap integration  
- Responsive design  
- Event-driven JavaScript  
- External API usage  
- JSON data integration  
- Basic accessibility best practices  

---

## 🛠️ Technologies Used  
- **HTML5** – Structure and page layout  
- **CSS3** – Custom styling  
- **Bootstrap 5.3** – Responsive components and layout  
- **JavaScript (ES6)** – Interactive features and API logic  
- **Fetch API** – API requests  
- **Custom JSON API** – Chapel events data  
- **Git & GitHub Pages** – Version control and deployment  

---

## 📂 Project Structure  
OKWUCampus_Life/
│
├── css/
│ └── style.css
│
├── js/
│ ├── script.js
│ └── chapel-events.json ← custom API data
│
├── images/
│ └── okuw-map.png
│
├── index.html
├── map.html
├── dining.html
├── schedule.html
├── events.html
└── community.html

---

## ✨ Key Features  

### **1. Interactive Chapel Events API (Custom JSON)**  
- Loads chapel services dynamically  
- Displays title, speaker, date, and location  
- Implements smooth fade-in animations  
- Demonstrates external API integration via `fetch()`  

### **2. Daily Devotion API**  
- Uses the public **labs.bible.org** API  
- Fetches a random verse on button click  
- Fully event-driven

### **3. Responsive Multi-Page Layout**  
- Includes 6 pages:
  - Home  
  - Map  
  - Dining  
  - Events  
  - Community & Devotions  
  - Schedule  

Each page uses Bootstrap’s responsive grid and custom CSS to ensure a clean layout on desktop, tablet, and mobile.

### **4. Campus Map Integration**  
- Legally used static screenshot of the OKWU campus map  
- Clean positioning and responsive rendering

### **5. Accessibility Considerations**  
- Semantic HTML structure  
- Alt text for images  
- Sufficient color contrast with Bootstrap components  
- Clear headings and navigation  

### **6. Version Control & Deployment**  
- Over 10 meaningful Git commits  
- Project deployed via GitHub Pages  
- Every push auto-updates the live site  

---

## 🚀 How to Run the Project  
You can visit the live version here:  
**[GitHub Pages URL](YOUR_GITHUB_PAGES_LINK_HERE)**

To run locally:

1. Clone the repository:
git clone https://github.com/MikeE1017/OKWUCampus_Life.git
2. Open the folder in VS Code  
3. Open **index.html** in your browser  
4. Enjoy the full app experience  

---

## 🔧 Future Improvements (Stretch Goals)  
These features could be added with more time:

- Dynamic dining menu API  
- Student class schedule with saved data  
- Weather widget using a public weather API  
- Real OKWU events feed (if an official API becomes available)  
- User login and personalization  
- Search functionality for groups or locations  

---

## 📝 Credits  
- Daily Bible verses: **labs.bible.org API**  
- Chapel events data: Custom JSON file created for academic use  
- Campus map screenshot © Oklahoma Wesleyan University  
- Bootstrap CSS framework via jsDelivr CDN  

---

## 👤 Author  
**Mike (Michael)**  
Cybersecurity Student, Oklahoma Wesleyan University  
Project completed for Web Development Final Project  
