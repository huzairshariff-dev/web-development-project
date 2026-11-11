document.addEventListener("DOMContentLoaded", function () {
  // ===== Mobile menu toggle =====
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const menuIcon = menuToggle.querySelector("i");

  function closeMenu() {
    navMenu.classList.remove("active");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", function () {
    const open = navMenu.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars", !open);
    menuIcon.classList.toggle("fa-times", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu when a link is clicked
  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // ===== Typing effect =====
  const texts = ["Web Developer Intern", "BCA Student", "Frontend Developer"];
  const typingElement = document.querySelector(".typing-text");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingDelay = 1500;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingDelay = 500;
    }

    setTimeout(type, typingDelay);
  }

  setTimeout(type, 1000);

  // ===== Smooth scrolling for in-page links =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    });
  });

  // ===== Footer year =====
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
