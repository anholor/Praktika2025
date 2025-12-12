                    // === ПЛАВНИЙ СКРОЛ ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


                    // === АНІМАЦІЯ ПОЯВИ ПРИ СКРОЛІ ===
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



                // === ВІДПРАВКА ФОРМИ ===
const form = document.getElementById("contactForm");
const statusBox = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusBox.textContent = "Відправка.";
  statusBox.style.color = "#2563eb";

  setTimeout(() => {
    statusBox.textContent = "Повідомлення надіслано!";
    statusBox.style.color = "green";
    form.reset();
  }, 1000);
});

