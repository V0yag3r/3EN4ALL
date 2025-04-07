// Efekt cząsteczek
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Treść po polsku i angielsku
const content = {
  pl: `
    <h2>Kim jestem?</h2>
    <p>Nazywam się <strong>Jacek Grodnicki</strong>. Od 18 lat zajmuję się programowaniem i pasjonuję się fizyką kwantową oraz astrofizyką.</p>
    <p>Łączę świat nauki i technologii, wierząc, że stoimy na progu nowego przełomu.</p>
    <p>Na tym blogu dzielę się przemyśleniami z pogranicza fizyki, IT i kosmosu.</p>
  `,
  en: `
    <h2>Who am I?</h2>
    <p>My name is <strong>Jacek Grodnicki</strong>. I have 18 years of experience in programming and a passion for quantum physics and astrophysics.</p>
    <p>I connect science with technology, believing we're on the verge of a new breakthrough.</p>
    <p>This blog shares thoughts at the intersection of physics, IT, and the universe.</p>
  `
};

const introCard = document.getElementById("introCard");
const langSwitcher = document.getElementById("langSwitcher");
function updateLanguage(lang) {
  introCard.innerHTML = content[lang];
}
langSwitcher.addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});
updateLanguage("pl");

// Slideshow tła
const backgrounds = [
  "images/tesla.png",
  "images/lazik.jpg",
  "images/serwerLaka.png"
];
let bgIndex = 0;

const styleBg = document.createElement("style");
document.head.appendChild(styleBg);

function updateBackground() {
  styleBg.innerHTML = `
    body::before {
      background-image: url('${backgrounds[bgIndex]}');
    }
  `;
  bgIndex = (bgIndex + 1) % backgrounds.length;
}
updateBackground();
setInterval(updateBackground, 10000); // co 10 sekund zmiana tła
