
# Sairam Kattunga's 3D Interactive Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-3D%20Portfolio-brightgreen)](https://sairam-kattunga.github.io/3D-portfolio/)  
[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/sairamkrvm123)

Welcome to the source code for my immersive 3D portfolio. This project moves beyond traditional static pages, creating an interactive "neural nexus" where visitors can explore my skills, projects, and experience in a dynamic WebGL environment.

**🚀 Live Demo:** **[https://sairam-kattunga.github.io/3D-portfolio/](https://sairam-kattunga.github.io/3D-portfolio/)**

---

## 📸 Project Showcase

<img width="3200" height="2000" alt="image" src="https://github.com/user-attachments/assets/773e0699-15d2-4db3-ba89-8e07af53a278" />

---

## 💡 About The Project

This portfolio was built from the ground up to be more than just a resume—it's an experience.  
The goal was to create a memorable and engaging narrative journey through my professional world.  

Using **Three.js**, I've constructed a 3D space where each of my key attributes (Skills, Projects, Experience, etc.) is represented as an interactive node orbiting a central core. This "digital space" concept allows for a unique and exploratory way to learn about my capabilities as a developer.

---

## ✨ Key Features

- **Immersive 3D Navigation:** Built with Three.js, the scene allows users to click, drag, and explore the portfolio in a 3D space.  
- **Dynamic UI Panels:** Clicking on a node triggers a smooth camera transition and brings up a sleek, blur-effect UI panel with detailed information.  
- **Automatic Intro Animation:** A cinematic intro sequence provides a professional and seamless entry into the main experience.  
- **Persistent Navigation:** A top navigation bar allows for quick jumps between sections without needing to return to the main hub view.  
- **Interactive Feedback:** Nodes provide satisfying visual feedback by scaling up and glowing intensely on hover, powered by GSAP.  
- **Responsive Design:** The UI panels and 3D scene are designed to be functional and visually appealing across different screen sizes.  
- **Modular Codebase:** The project is structured with modern JavaScript modules, separating logic, content, and styling for maintainability.  

---

## 🛠️ Tech Stack

This project leverages a modern web technology stack to create a smooth and high-performance experience.

- **Core:** HTML5, CSS3, JavaScript (ES6 Modules)  
- **3D Rendering:** [Three.js](https://threejs.org/)  
- **Animation:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)  
- **Deployment:** [GitHub Pages](https://pages.github.com/)  

---

## 📁 Project Structure

```

/
├── index.html          # The main HTML entry point
├── style.css           # All CSS styling rules
├── main.js             # Core Three.js logic, interactivity, and animations
└── content.js          # A module exporting all UI panel content

````

---

## 🚀 Getting Started (Local Setup)

To run this project on your local machine, follow these steps.

### Prerequisites
You will need a local web server to run the project.  
Modern browsers have strict security policies (CORS) for loading ES6 modules (`import`/`export`) directly from the local file system (`file:///...`).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sairam-kattunga/3D-portfolio.git


2. **Navigate to the project directory:**

   ```bash
   cd 3D-portfolio
   ```

3. **Start a local server:**

   * **Using Python:**

     ```bash
     python -m http.server
     ```
   * **Using VS Code Live Server Extension:**
     Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then click **Go Live** in the bottom-right corner of VS Code.

4. **Open in your browser:**
   Go to `http://localhost:8000` (or the address provided by your local server).

---

## 📬 Contact

**Sairam Kattunga**

* **Email:** `sairamkattunga333@gmail.com`
* **LinkedIn:** [linkedin.com/in/sairamkrvm123](https://www.linkedin.com/in/sairamkrvm123)

---

