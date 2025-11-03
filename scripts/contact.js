// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".faq-icon");

    // Toggle active class on answer
    answer.classList.toggle("active");

    // Change icon
    if (answer.classList.contains("active")) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }

    // Close other answers
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        const otherAnswer = otherQuestion.nextElementSibling;
        const otherIcon = otherQuestion.querySelector(".faq-icon");
        otherAnswer.classList.remove("active");
        otherIcon.textContent = "+";
      }
    });
  });
});

// Contact Form Submission with Formspree
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const btn = this.querySelector(".btn");
  const originalText = btn.textContent;
  btn.textContent = "Sending...";
  btn.disabled = true;

  // Get form data
  const formData = new FormData(this);

  try {
    // Send to Formspree - Replace YOUR_FORM_ID with your actual Formspree form ID
    const response = await fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Message sent successfully! I'll get back to you soon.");
      contactForm.reset();
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    alert("Failed to send message. Please try again.");
    console.error("Formspree Error:", error);
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});
