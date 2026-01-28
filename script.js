// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.98)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    navbar.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// ===================================
// SKILL BARS ANIMATION
// ===================================

const animateSkillBars = () => {
  const skillLevels = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  skillLevels.forEach((skill) => {
    skill.style.opacity = "0";
    skill.style.transition = "opacity 1s, width 1.5s ease-out";
    observer.observe(skill);

    setTimeout(() => {
      skill.style.opacity = "1";
    }, 100);
  });
};

// Run animation when page loads
if (document.querySelector(".skill-level")) {
  window.addEventListener("load", animateSkillBars);
}

// ===================================
// ACTIVE PAGE HIGHLIGHT
// ===================================

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ===================================
// FADE IN ANIMATIONS
// ===================================

const fadeElements = document.querySelectorAll(
  ".hero-content, .about-content, .resume-column",
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

fadeElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  fadeObserver.observe(element);
});

// ===================================
// MOBILE MENU TOGGLE (Optional Enhancement)
// ===================================

// You can add a mobile hamburger menu here if needed
// This is a placeholder for future enhancement

console.log("Portfolio site loaded successfully!");
