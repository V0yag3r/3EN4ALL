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
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

const content = {
  pl: `<h2>Kim jestem naprawdę?</h2>
<p>Nazywam się <strong>Jacek Grodnicki</strong>. Mam ponad 18 lat praktyki w programowaniu...</p>`,
  en: `<h2>Who am I really?</h2>
<p>My name is <strong>Jacek Grodnicki</strong>. I have over 18 years of experience...</p>`
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
