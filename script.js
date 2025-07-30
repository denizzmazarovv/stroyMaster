// Mobile menu toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const navMenu = document.querySelector(".nav-menu");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileToggle.querySelector("i").classList.toggle("fa-bars");
  mobileToggle.querySelector("i").classList.toggle("fa-times");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileToggle.querySelector("i").classList.add("fa-bars");
    mobileToggle.querySelector("i").classList.remove("fa-times");
  });
});

// Projects filter
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Back to top button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset form message
  formMessage.className = "form-message";
  formMessage.textContent = "";

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    service === "" ||
    message === ""
  ) {
    showMessage("Пожалуйста, заполните все поля", "error");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("Пожалуйста, введите корректный email", "error");
    return;
  }

  // Phone validation (simple)
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(phone)) {
    showMessage("Пожалуйста, введите корректный телефон", "error");
    return;
  }

  // If all validations pass
  // In a real scenario, here you would send the form data to a server
  showMessage(
    "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
    "success"
  );

  // Reset form
  contactForm.reset();
});

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.classList.add(type);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
