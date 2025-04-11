
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
      speed: 0.3
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
<p>Czy świat, który widzimy, to jedyna warstwa rzeczywistości? Co kryje się pod powierzchnią znanego nam czasu i przestrzeni? Od lat fascynuje mnie fizyka kwantowa — dziedzina, która nie tylko przeczy intuicji, ale zmusza nas do przedefiniowania pojęć takich jak przyczynowość, materia, a nawet istnienie. Przez 18 lat pracowałem jako informatyk, mając styczność z różnorodnymi technologiami i systemami. Dzięki temu potrafię łączyć inżynierską precyzję z naukową ciekawością.</p>
<p>Ten blog to moja osobista przestrzeń do zadawania pytań — nie tylko naukowych, ale też filozoficznych. Interesuje mnie, jak splątanie cząstek, tunelowanie kwantowe czy eksperyment podwójnej szczeliny mogą mieć wpływ na nasze rozumienie świadomości, tożsamości, a nawet wolnej woli. To nie tylko blog o fizyce, ale także o ludziach, o nas — o tym, jak interpretujemy rzeczywistość i co możemy z nią zrobić. Moim celem nie jest dawanie gotowych odpowiedzi, lecz prowokowanie do myślenia.</p>
<p>Na blogu pojawią się również treści z pogranicza informatyki, technologii i sztucznej inteligencji. Chcę pokazać, jak wykorzystać mechanikę kwantową w informatyce i odwrotnie — jak informatyka może pomóc w modelowaniu zjawisk fizycznych. Jeśli szukasz miejsca, gdzie nauka spotyka się z pasją i osobistym spojrzeniem, jesteś we właściwym miejscu.</p>
<p><a href="#wiecej" style="color:#00f; text-decoration:underline;">więcej</a></p>
`,
  en: `
<h2>Welcome to my blog!</h2>
<p>Is the world we see the only layer of reality? What lies beneath the surface of time and space as we know them? I have long been fascinated by quantum physics — a field that not only defies intuition but forces us to redefine concepts like causality, matter, and even existence. For 18 years I worked as an IT specialist, dealing with diverse technologies and systems. This allows me to combine engineering precision with scientific curiosity.</p>
<p>This blog is my personal space for asking questions — not only scientific but also philosophical. I'm interested in how quantum entanglement, tunneling or the double-slit experiment affect our understanding of consciousness, identity and even free will. This is not just a blog about physics, but also about people — about how we interpret reality and what we can do with it. I'm not here to give you final answers — I want to provoke thought.</p>
<p>You’ll also find content about computing, technology and AI. I want to show how quantum mechanics can influence computing and how computing helps simulate complex physical systems. If you're looking for a place where science meets curiosity and personal perspective, you're in the right place.</p>
<p><a href="#more" style="color:#00f; text-decoration:underline;">more</a></p>
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
