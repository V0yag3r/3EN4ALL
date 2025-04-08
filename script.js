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
  pl: `<h2>Witaj na moim blogu!</h2>
<p>
Czy świat, który widzimy, to jedyna warstwa rzeczywistości? Co kryje się pod powierzchnią znanego nam czasu i przestrzeni? Od lat fascynuje mnie fizyka kwantowa — dziedzina, która nie tylko przeczy intuicji, ale zmusza nas do przedefiniowania pojęć takich jak przyczynowość, materia, a nawet istnienie. Przez 18 lat pracowałem jako informatyk, mając styczność z różnorodnymi technologiami i systemami. Dzięki temu potrafię łączyć inżynierską precyzję z naukową ciekawością.
</p>
<p>
Ten blog powstał z potrzeby zadawania pytań, których wielu nie odważa się postawić. Jakie są granice poznania? Czy świadomość wpływa na wynik pomiaru? Czy rzeczywistość istnieje bez obserwatora? Tutaj nie chodzi tylko o suche fakty, ale o próbę zrozumienia — nie tylko świata zewnętrznego, ale i naszego miejsca w nim. Łączę wątki naukowe, filozoficzne i technologiczne, tworząc przestrzeń do refleksji i dyskusji. Nie szukam prostych odpowiedzi — bardziej interesuje mnie, jak myślimy, niż co myślimy.
</p>
<p>
Blog ten to nie tylko teksty — planuję również interaktywne symulacje, modele kwantowe, a także opowieści inspirowane aktualnymi badaniami. Jeśli interesuje Cię fizyka, kosmos, kwantowe osobliwości, technologia i odrobina metafizyki — zostań na dłużej. Wchodzimy głębiej.
</p>
<p><a href="#wiecej" style="color:#00f; text-decoration:underline;">więcej</a></p>`,
  en: `<h2>Welcome to my blog!</h2>
<p>
Is the world we see the only layer of reality? What lies beneath the surface of time and space as we know them? For years, I have been fascinated by quantum physics — a field that not only defies intuition but forces us to redefine concepts like causality, matter, and even existence. I’ve worked for 18 years as an IT specialist, involved with various systems and technologies. This allows me to combine engineering precision with scientific curiosity.
</p>
<p>
This blog was created to ask questions that many are afraid to ask. What are the limits of knowledge? Does consciousness affect measurement outcomes? Can reality exist without an observer? This space is not just about facts, but about seeking understanding — of both the universe and ourselves within it. I merge scientific, philosophical and technological threads to create a space for reflection and inquiry. I’m not looking for simple answers — I’m more interested in how we think than what we think.
</p>
<p>
This blog is more than just text — I plan to include simulations, quantum models, and thought experiments. If you’re into physics, the cosmos, quantum oddities, technology, and a bit of metaphysics — you’re in the right place.
</p>
<p><a href="#more" style="color:#00f; text-decoration:underline;">more</a></p>`
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
