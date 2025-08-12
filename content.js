export function getPanelContent(sectionName) {
    const content = {
        'CORE_PROFILE': `
            <h2>Core Profile</h2>
            <div class="core-profile-content">
                <img src="abc.jpg" alt="Sairam Kattunga" class="profile-pic">
                <div>
                    <h3>Rama Venkata Manikanta Sairam Kattunga</h3>
                    <p>An innovative AI enthusiast and Full-Stack Developer from India, passionate about engineering intelligent systems and intuitive user experiences. My work focuses on bridging the gap between complex data and human interaction, with a current emphasis on the frontiers of Generative AI.</p>
                    <strong>Hobbies:</strong> Reading Tech Blogs, Traveling, and exploring emerging technology domains.
                </div>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/sairamkrvm123" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/Sairam-kattunga" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="mailto:sairamkattunga333@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
                <a href="https://leetcode.com/u/Sairam-333/" target="_blank" title="LeetCode"><i class="fas fa-code"></i></a>
            </div>`,
        'ABOUT': `
            <h2>About Me</h2>
            <p>As a forward-thinking Computer Science graduate, I specialize in the convergence of Artificial Intelligence and Full-Stack Development. My core mission is to architect intelligent, scalable solutions that not only perform robustly but also offer seamless and engaging user experiences. I am driven to tackle complex problems and contribute to a technologically empowered future.</p>
            <p>This portfolio is a manifestation of that drive—an interactive digital space designed to showcase the intersection of my skills and creativity.</p>
            <a href="https://drive.google.com/file/d/125bO3fxzSSk-ZlqFuxt0at2AjRyLzeS6/view?usp=drive_link" target="_blank" class="resume-download-btn"><i class="fas fa-download"></i> Download Resume</a>`,
        'SKILLS': `
            <h2>Technical Proficiencies</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Languages & Frameworks</h3>
                    <p>Java, Python, JavaScript (React.js), C, Flutter, HTML5, CSS3</p>
                </div>
                <div class="skill-category">
                    <h3>AI & Data Science</h3>
                    <p>Machine Learning, Deep Learning (CNNs), Generative AI, SQL (MySQL)</p>
                </div>
                <div class="skill-category">
                    <h3>Platforms & Tools</h3>
                    <p>Git & GitHub, Firebase, Oracle Cloud (OCI), Azure, Postman</p>
                </div>
            </div>`,
        'PROJECTS': `
            <h2>Featured Projects</h2>
            <div class="info-section">
                <h3>Simatix – College Connect App</h3>
                <p class="meta"><strong>Tech Stack:</strong> Flutter, Firebase, Dart</p>
                <p>Developed a full-stack mobile app for real-time faculty ratings and anonymous feedback, improving student-faculty engagement by 40%.</p>
                <a href="https://github.com/Sairam-kattunga/Simatix" target="_blank" class="cert-button">View Code &rarr;</a>
            </div>
            <div class="info-section">
                <h3>Smart City Traffic Monitoring</h3>
                <p class="meta"><strong>Tech Stack:</strong> Python, TensorFlow, Keras, CNN</p>
                <p>Designed a CNN-based model to detect traffic congestion with 93% accuracy, enabling smarter urban traffic analysis.</p>
                <a href="https://github.com/Sairam-kattunga/Smart-City-Traffic-Monitoring" target="_blank" class="cert-button">View Code &rarr;</a>
            </div>
            <div class="info-section">
                <h3>Personal Safety Device</h3>
                <p class="meta"><strong>Tech Stack:</strong> Embedded C, Arduino</p>
                <p>Prototyped an all-in-one device with torchlight, pepper spray, and emergency alerts, targeting 70% faster response times in tests.</p>
                <a href="https://github.com/Sairam-kattunga/All-in-One-Personal-Safety-Device" target="_blank" class="cert-button">View Report &rarr;</a>
            </div>`,
        'EXPERIENCE': `
            <h2>Professional Experience</h2>
            <div class="info-section">
                <h3>Cybersecurity Trainee</h3>
                <p class="meta">HCLTech | Feb 2025 – Apr 2025</p>
                <p>Completed an intensive training program covering Security+, CEH, SC-900, CCNA Security, and key analytics tools, gaining a comprehensive foundation in modern cybersecurity principles and practices.</p>
            </div>
            <div class="info-section">
                <h3>Drone Pilot Intern</h3>
                <p class="meta">Garuda Aerospace | May 2024 – July 2024</p>
                <p>Acquired hands-on expertise in drone operations, navigation, and data acquisition for precision agriculture and surveillance, contributing to operational efficiency.</p>
            </div>`,
        'EDUCATION': `
            <h2>Education</h2>
            <div class="info-section">
                <h3>Bachelor of Engineering, Computer Science</h3>
                <p class="meta">Saveetha School of Engineering | 2021 – 2025 | CGPA: 8.6</p>
            </div>
            <div class="info-section">
                <h3>Intermediate (MPC)</h3>
                <p class="meta">Sri Chaitanya College | 2019 – 2021 | 96.4%</p>
            </div>
            <div class="info-section">
                <h3>SSC (10th Grade)</h3>
                <p class="meta">Bhashyam High School | 2018 – 2019 | CGPA: 9.8</p>
            </div>`,
        'CERTIFICATIONS': `
            <h2>Licenses & Certifications</h2>
            <div class="info-section">
                <h3>Wipro Certified Java Full Stack Developer</h3>
                <p class="meta">Wipro | Oct 2024</p>
                <a href="#" target="_blank" class="cert-button"><i class="fas fa-certificate"></i> View Credential</a>
            </div>
            <div class="info-section">
                <h3>Oracle Cloud Infrastructure 2024: Generative AI</h3>
                <p class="meta">Oracle University | 2024</p>
                <a href="#" target="_blank" class="cert-button"><i class="fas fa-certificate"></i> View Credential</a>
            </div>
            <div class="info-section">
                <h3>Oracle APEX Cloud Developer Professional</h3>
                <p class="meta">Oracle University | 2024</p>
                <a href="#" target="_blank" class="cert-button"><i class="fas fa-certificate"></i> View Credential</a>
            </div>
            <div class="info-section">
                <h3>Responsive Web Design</h3>
                <p class="meta">freeCodeCamp | 2024</p>
                <a href="#" target="_blank" class="cert-button"><i class="fas fa-certificate"></i> View Credential</a>
            </div>`,
        'CONTACT': `
            <h2>Get In Touch</h2>
            <p>I am actively seeking new opportunities and collaborations where I can apply my skills to solve challenging problems. Let's connect and build something remarkable together.</p>
            <div class="contact-grid">
                <a href="mailto:sairamkattunga333@gmail.com" class="contact-item">
                    <i class="fas fa-envelope"></i><div><strong>Email</strong><br>sairamkattunga333@gmail.com</div>
                </a>
                <a href="https://www.linkedin.com/in/sairamkrvm123" target="_blank" class="contact-item">
                    <i class="fab fa-linkedin"></i><div><strong>LinkedIn</strong><br>in/sairamkrvm123</div>
                </a>
                <a href="https://github.com/Sairam-kattunga" target="_blank" class="contact-item">
                    <i class="fab fa-github"></i><div><strong>GitHub</strong><br>Sairam-kattunga</div>
                </a>
                <a href="#" class="contact-item">
                     <i class="fas fa-phone"></i><div><strong>Phone</strong><br>+91 96427 36457</div>
                </a>
            </div>`
    };
    return content[sectionName] || `<h2>Error</h2><p>Content not found.</p>`;
}