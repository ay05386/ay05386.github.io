// Portfolio Data Object
const portfolioData = {
  personalInfo: {
    name: "Ali Youssef",
    title: "Mobile Developer",
    bio: "I build high-performance mobile apps with Flutter that help businesses grow, engage users, and stand out in competitive markets. Every project I take on is designed to deliver measurable results, not just code.",
    profilePictureUrl: "image.jpeg"
  },
  technicalSkills: [
    { name: "Flutter", icon: "fab fa-flutter" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "Dart", icon: "fas fa-code" },
    { name: "Kotlin", icon: "fab fa-korvue" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "More", icon: "fas fa-ellipsis-h" }
  ],
  workExperience: [
    {
      duration: "February 2024 – Present",
      position: "Freelance Mobile Developer",
      company: "Self-Employed",
      bulletPoints: [
        "Developed mobile apps using Android (Java, Kotlin) and Flutter",
        "Engineered a high-performance cross-platform educational app **Support STEM Education** using Flutter and AWS, delivering secure, scalable solutions that boosted student engagement and streamlined digital learning for a major educational client."
      ]
    },
    {
      duration: "January 2023 – February 2024",
      position: "Android Developer",
      company: "Blue Bird",
      bulletPoints: [
        "Developed and maintained high-performance Android applications using Kotlin, Jetpack Compose, Room, and Firebase, ensuring scalability and optimal user experience.",
        "Integrated REST APIs, implemented authentication and optimized app architecture using MVVM and Dagger for efficient DI.",
        "Collaborated with cross-functional teams to design, test, and deploy feature-rich mobile applications, following industry best practices."
      ]
    }
  ],
  projectHtml: `
    <div class="badges">
      <img src="https://img.shields.io/badge/Flutter-Expert-blue.svg" alt="Flutter badge" />
      <img src="https://img.shields.io/badge/AWS-Production%20Ready-orange.svg" alt="AWS badge" />
      <img src="https://img.shields.io/badge/Live%20Demo-Available-green.svg" alt="Live Demo badge" />
      <img src="https://img.shields.io/badge/Client%20Rating-5%E2%98%85-gold.svg" alt="Client Rating badge" />
    </div>
    <blockquote>"Transformed a traditional training center into a modern digital learning ecosystem, serving 500+ students with 99.9% uptime and zero security breaches."</blockquote>

    <h4>Business Impact Delivered</h4>
    <ul>
      <li><strong>300% increase</strong> in student engagement</li>
      <li><strong>40% revenue growth</strong> through scalable online courses</li>
      <li><strong>75% reduction</strong> in administrative workload</li>
      <li><strong>Expanded reach</strong> from local to international students</li>
      <li><strong>Cross-platform presence</strong> on iOS, Android, and Web</li>
    </ul>

    <h4>Enterprise-Grade Security</h4>
    <pre><code>
✅ Role-based access control (Admin/Teacher/Student)
✅ Secure video streaming with domain protection
✅ AWS Cognito Authentication with multi-factor support
✅ Encrypted file storage and transmission
✅ GDPR-compliant data handling
    </code></pre>

    <h4>Scalable Architecture Built for Growth</h4>
    <ul>
      <li><strong>Handles 1000+ concurrent users</strong> without performance degradation</li>
      <li><strong>Microservices approach</strong> for easy feature additions</li>
      <li><strong>Cloud-native AWS infrastructure</strong> with auto-scaling capabilities</li>
      <li><strong>99.9% uptime</strong> with robust error handling and monitoring</li>
    </ul>

    <h4>Advanced Media Solutions</h4>
    <ul>
      <li><strong>Premium Video Streaming</strong> via Vimeo Pro integration</li>
      <li><strong>Real-time Live Lectures</strong> with HD quality (Agora.io)</li>
      <li><strong>Offline-first approach</strong> for uninterrupted learning</li>
      <li><strong>Adaptive bitrate streaming</strong> for all connection speeds</li>
    </ul>

    <h4>Modern Tech Stack</h4>
    <pre><code>
Frontend:    Flutter 3.x (iOS/Android/Web)
Backend:     AWS (Lambda + API Gateway + DynamoDB)
Video:       Vimeo Pro + Agora.io
Storage:     AWS S3 + CloudFront CDN
Analytics:   AWS CloudWatch + X-Ray
    </code></pre>

    <h4>Performance Metrics</h4>
    <ul>
      <li><strong>&lt;2s app launch time</strong> on all devices</li>
      <li><strong>&lt;100ms API response times</strong> for all operations</li>
      <li><strong>&lt;5s video start time</strong> with adaptive streaming</li>
      <li><strong>Works seamlessly</strong> on devices from iPhone 6 to latest Android</li>
    </ul>

    <h4>Client Testimonial</h4>
    <blockquote><em>"Ali delivered beyond our wildest expectations. The app transformed our business model and opened new revenue streams we hadn't even considered. His technical expertise, combined with genuine business understanding, made him feel like part of our team rather than just a contractor."</em> – <strong>Mohamed Al-Rashid, CEO, Inspire Training Center</strong></blockquote>

    <h3 class="big-project-title">Smart Pharma</h3>
    <div class="project-video">
      <iframe src="https://player.vimeo.com/video/1119048393?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Smart Pharma Demo"></iframe>
    </div>
    <ul>
      <li>• Developed Smart Pharma, an Android pharmacy app, showcasing adeptness in modern mobile app development.</li>
      <li>• Utilized [Java, XML, Firebase, MVVM architecture, and more] to efficiently manage inventory and prescriptions.</li>
      <li>• Employed Firebase for authentication and database storage in Smart Pharma, enhancing data security and user experience with cloud-based services. Additionally, integrated AI components for prescription reading.</li>
    </ul>

    <p><strong>Ready to transform your business with a custom digital solution? Let's discuss how I can help you achieve similar results.</strong></p>
    <p><strong>Email:</strong> ay05386@gmail.com<br/>
    <strong>WhatsApp:</strong> +201207767340</p>
  `
};

// Helper to create elements with classes
function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

// Populate DOM after document ready
window.addEventListener("DOMContentLoaded", () => {
  /* Personal Info */
  const { personalInfo, technicalSkills, workExperience, projectHtml } = portfolioData;

  const img = document.getElementById("profile-picture");
  const nameEl = document.getElementById("name");
  const titleEl = document.getElementById("title");
  const bioEl = document.getElementById("bio");

  img.src = personalInfo.profilePictureUrl;
  img.alt = `${personalInfo.name} picture`;
  nameEl.textContent = personalInfo.name;
  titleEl.textContent = personalInfo.title;
  bioEl.textContent = personalInfo.bio;

  /* Skills */
  const skillsContainer = document.getElementById("skills-container");
  technicalSkills.forEach(({ name, icon }) => {
    const skill = createEl("div", "skill-tag");
    
    // Use Font Awesome icon instead of image
    const iconEl = document.createElement("i");
    iconEl.className = `skill-icon-fallback ${icon}`;
    
    const nameEl = createEl("span", null, name);
    skill.appendChild(iconEl);
    skill.appendChild(nameEl);
    skillsContainer.appendChild(skill);
  });

  /* Work Experience */
  const expContainer = document.getElementById("experience-container");
  workExperience.forEach(({ duration, position, company, bulletPoints }) => {
    const item = createEl("div", "work-experience-item");

    // Title line: job title (+company) and duration
    const titleLine = createEl("div", "title-line");
    const jobTitleText = `${position}${company ? (position.includes(company) ? "" : " @ " + company) : ""}`;
    const jobTitleEl = createEl("span", "job-title", jobTitleText);
    const durationEl = createEl("span", "duration", duration);

    titleLine.appendChild(jobTitleEl);
    titleLine.appendChild(durationEl);
    item.appendChild(titleLine);

    // Bullet list of responsibilities
    const ul = createEl("ul", "responsibilities");
    bulletPoints.forEach(point => {
      const li = createEl("li");
      li.innerHTML = point; // Use innerHTML to support markdown-style bold text
      ul.appendChild(li);
    });
    item.appendChild(ul);

    expContainer.appendChild(item);
  });

  /* Project Section */
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = projectHtml;
});

/* ==== Particle Background in Left & Right Margins ==== */
(function () {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, marginX;
  const PARTICLE_COUNT = 64;
  const MAX_DIST = 120;
  const particles = [];
  const mouse = { x: NaN, y: NaN };

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const containerWidth = document.querySelector(".container").offsetWidth;
    marginX = (width - containerWidth) / 2;
  }
  window.addEventListener("resize", resize);
  resize();

  function randomParticle() {
    // Spawn only inside margins
    const x = Math.random() < 0.5
      ? Math.random() * marginX // left margin
      : width - marginX + Math.random() * marginX; // right margin
    return {
      x,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    };
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(randomParticle());

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function inMargin(x) {
    return x < marginX || x > width - marginX;
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // update & draw particles
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // bounce vertically in viewport
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // respawn if particle leaves margin horizontally
      if (!inMargin(p.x)) {
        Object.assign(p, randomParticle());
      }

      // draw dot
      ctx.fillStyle = "#8A2BE2";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    // draw connections between particles
    ctx.strokeStyle = "rgba(138,43,226,0.3)";
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const p2 = particles[j];
        if (!inMargin(p1.x) || !inMargin(p2.x)) continue;
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DIST) {
          ctx.globalAlpha = 1 - dist / MAX_DIST;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // connect particles to mouse if mouse is in margin
    if (!isNaN(mouse.x) && inMargin(mouse.x)) {
      particles.forEach((p) => {
        if (!inMargin(p.x)) return;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DIST) {
          ctx.globalAlpha = 1 - dist / MAX_DIST;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  }
  step();
})();