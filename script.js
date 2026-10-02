document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded.");

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded.");

  /* ========================================
     SCROLL REVEAL
  ======================================== */

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });


/* ========================================
   THEME
======================================== */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Use saved preference if available.
// Otherwise use the user's system preference.
const initialTheme = savedTheme
  ? savedTheme
  : systemPrefersDark
    ? "dark"
    : "light";

document.documentElement.setAttribute(
  "data-theme",
  initialTheme
);

updateThemeButton();

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute(
    "data-theme",
    newTheme
  );

  localStorage.setItem("theme", newTheme);

  updateThemeButton();
});


function updateThemeButton() {
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";

  themeToggle.setAttribute(
    "aria-label",
    isDark
      ? "Switch to light mode"
      : "Switch to night mode"
  );
}
});