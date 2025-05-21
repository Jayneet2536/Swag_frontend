gsap.registerPlugin(ScrollTrigger);


function animateTextElement(selector, index) {
  const element = document.querySelectorAll(selector)[index];
  element.style.display = "inline-block";
  const words = element.textContent.split(" ").filter(w => w);
  element.innerHTML = words.map(word => `<span class="word-${index}">${word}</span>`).join(" ");

  gsap.from(`.word-${index}`, {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}


document.querySelectorAll('.textanime').forEach((_, i) => {
  animateTextElement('.textanime', i);
});


gsap.from("#logo", {
  x: -100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#logo",
    start: "top 80%"
  }
});


const nav = document.getElementById("right");
nav.innerHTML = nav.textContent.split(" ").map(word => 
  `<span class="nav-word">${word}</span>`
).join("");

gsap.from(".nav-word", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  
});


gsap.from("#abt-text h3", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#abt-text",
    start: "top 80%"
  }
});

gsap.from("#event-text-1 h3", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#event-text-1",
    start: "top 80%"
  }
});
gsap.from("#event-text-2 h3", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#event-text-2",
    start: "top 80%"
  }
});
gsap.from("#event-text-3 h3", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#event-text-3",
    start: "top 80%"
  }
});

gsap.from("#abt-img", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#abt-text",
    start: "top 80%"
  }
});