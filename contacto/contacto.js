window.addEventListener("DOMContentLoaded", () => {
  
  gsap.from(".contact-section h2", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "back.out(1.7)"
  });

  gsap.from(".form-group", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".contact-info p", {
    duration: 1,
    x: -30,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from("footer", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power1.out"
  });

   gsap.from("button[type='submit']", {
    x: -200,           
    opacity: 0,         
    duration: 1.5,
    ease: "power2.out"
  });
    
  const button = document.querySelector("button[type='submit']");
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(255,255,255,0.6)",
      duration: 0.3
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3
    });
  });
});
