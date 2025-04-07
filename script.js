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
  pl: `
<h2>Witaj na moim blogu!</h2>
<p>
Zastanawiałeś się kiedyś, jak działa wszechświat w swojej najmniejszej skali? A może interesuje Cię, co łączy kod komputerowy z prawami fizyki, które rządzą czarnymi dziurami i splątaniem kwantowym? Na tym blogu łączę swoją 18-letnią praktykę programistyczną z pasją do fizyki, eksplorując granice poznania. Każdy wpis to próba odpowiedzi na pytania, które zadają tylko najodważniejsi — czy świat jest deterministyczny? Czy jesteśmy częścią większego kodu? A może to my go piszemy? <a href="#wiecej" style="color:#00f; text-decoration:underline;">więcej</a>
</p>
`,
  en: `
<h2>Witaj na moim blogu!</h2>
<p>
Zastanawiałeś się kiedyś, jak działa wszechświat w swojej najmniejszej skali? A może interesuje Cię, co łączy kod komputerowy z prawami fizyki, które rządzą czarnymi dziurami i splątaniem kwantowym? Na tym blogu łączę swoją 18-letnią praktykę programistyczną z pasją do fizyki, eksplorując granice poznania. Każdy wpis to próba odpowiedzi na pytania, które zadają tylko najodważniejsi — czy świat jest deterministyczny? Czy jesteśmy częścią większego kodu? A może to my go piszemy? <a href="#wiecej" style="color:#00f; text-decoration:underline;">więcej</a>
</p>
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
