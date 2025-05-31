gsap.from(".header-content", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".nav-container", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power3.out",
  delay: 0.5
});

gsap.utils.toArray("main section").forEach((section, i) => {
  gsap.from(section, {
    duration: 1,
    y: 40,
    opacity: 0,
    ease: "power3.out",
    delay: 1 + i * 0.3
  });
});

gsap.utils.toArray(".skill-level").forEach(bar => {
  gsap.fromTo(bar, 
    { width: "0%" }, 
    { width: bar.style.width, duration: 1.5, ease: "power3.out", delay: 2 }
  );
});

gsap.from("footer", {
  duration: 1,
  opacity: 0,
  delay: 3,
  ease: "power3.out"
});

