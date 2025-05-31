gsap.from("#internet", {
  opacity: 0,
  scale: 0.95,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".browser-header", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.4
});

gsap.from(".address-bar input", {
  scaleX: 0,
  opacity: 0,
  duration: 0.6,
  ease: "power1.out",
  delay: 0.8
});

gsap.from(".homepage h3", {
  y: -20,
  opacity: 0,
  duration: 0.8,
  delay: 1,
  ease: "power2.out"
});

gsap.from(".search-box", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.4,
  ease: "power2.out"
});

gsap.from(".link-item", {
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  delay: 1.0,
  ease: "back.out(1.7)"
});
