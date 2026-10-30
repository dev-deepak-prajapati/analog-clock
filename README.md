# Analog Clock 🕒

A lightweight, responsive, and interactive Analog Clock built using **HTML5**, **CSS3**, and **Vanilla JavaScript**. It real-time tracks hours, minutes, and seconds with smooth hand movements and displays the current day and date.

## 🚀 Live Demo
Check out the live deployment via GitHub Pages:  
[View Live Demo](https://dev-deepak-prajapati.github.io/analog-clock/)

---

## ✨ Features
- **Real-Time Tracking:** Dynamically updates hour, minute, and second hands using the JavaScript `Date` object.
- **Date & Day Complications:** Displays the current calendar day and date cleanly inside the clock face.
- **Responsive Design:** Scales gracefully across various screen sizes and devices.
- **Zero Dependencies:** Built entirely with native web technologies—no external libraries or frameworks required.

---

## 🛠️ Tech Stack
- **HTML5:** Structure of the clock face and hands.
- **CSS3:** Styling, positioning, transforms, and smooth transitions.
- **JavaScript (ES6+):** Time calculation logic and DOM manipulation.

---

## 📂 Project Structure
```text
analog-clock/
│
├── index.html       # Main HTML markup structure
├── style.css        # Stylesheet for clock layout and animations
├── script.js        # JavaScript logic for real-time clock movement
└── README.md        # Project documentation
```

## ⚙️ Getting Started & Installation

To run this project locally on your machine, follow these quick steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dev-deepak-prajapati/analog-clock.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd analog-clock
   ```

3. **Launch the application:**
   Simply double-click the `index.html` file to open it directly in any modern web browser, or use a local server tool like VS Code's *Live Server* extension.


## 💡 How It Works
The JavaScript engine fetches the current system time using `new Date()` and calculates the exact rotational angles for each hand:
- **Seconds Hand:** Rotates $6^\circ$ per second ($360^\circ / 60$).
- **Minutes Hand:** Rotates $6^\circ$ per minute plus a fractional offset based on elapsed seconds.
- **Hour Hand:** Rotates $30^\circ$ per hour ($360^\circ / 12$) plus a fractional offset based on elapsed minutes.


## 👤 Author
**Deepak Prajapati**
- GitHub: @dev-deepak-prajapati


## ⭐️ Show Your Support
If you found this project helpful or interesting, please consider giving it a star on GitHub!
