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
Czy świat, który widzimy, to jedyna warstwa rzeczywistości? Co kryje się pod powierzchnią znanego nam czasu i przestrzeni? Od lat fascynuje mnie fizyka kwantowa — dziedzina, która nie tylko przeczy intuicji, ale zmusza nas do przedefiniowania pojęć takich jak przyczynowość, materia, a nawet istnienie. Przez 18 lat pracowałem jako informatyk, mając styczność z różnorodnymi technologiami i systemami. Dzięki temu potrafię łączyć inżynierską precyzję z naukową ciekawością. Ten blog to mój sposób na zadawanie pytań...
</p>
`,
  en: `
<h2>Witaj na moim blogu!</h2>
<p>
Czy świat, który widzimy, to jedyna warstwa rzeczywistości? Co kryje się pod powierzchnią znanego nam czasu i przestrzeni? Od lat fascynuje mnie fizyka kwantowa — dziedzina, która nie tylko przeczy intuicji, ale zmusza nas do przedefiniowania pojęć takich jak przyczynowość, materia, a nawet istnienie. Przez 18 lat pracowałem jako informatyk, mając styczność z różnorodnymi technologiami i systemami. Dzięki temu potrafię łączyć inżynierską precyzję z naukową ciekawością. Ten blog to mój sposób na zadawanie pytań...
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
