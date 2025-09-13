// Typing effect
const text = "ALJANE SOUROUR";
let i = 0;
function typing() {
    if (i < text.length) {
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(typing, 120);
    }
}
document.querySelector(".typing").textContent = "";
typing();

// Fade-in on scroll
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
cards.forEach(c => {
    c.style.opacity = 0;
    c.style.transform = "translateY(50px)";
    c.style.transition = "all 0.6s ease";
});

const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Appliquer le thème selon l'état du switch
toggle.addEventListener('change', () => {
    body.classList.toggle('light', toggle.checked);
});

