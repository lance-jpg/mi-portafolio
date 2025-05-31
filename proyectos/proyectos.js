gsap.from("h2", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "bounce.out",
});

gsap.from(".project-item", {
  duration: 0.8,
  y: 40,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out",
});

gsap.from(".project-gallery img", {
  duration: 1,
  scale: 0.7,
  rotation: -5,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)",
});

const projectVideos = document.querySelectorAll(".project-video");
projectVideos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    gsap.to(video, {scale: 1.05, duration: 0.4, ease: "power1.out"});
  });
  video.addEventListener("mouseleave", () => {
    gsap.to(video, {scale: 1, duration: 0.4, ease: "power1.in"});
  });
});

const projectImages = document.querySelectorAll(".project-gallery img");
projectImages.forEach(img => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power1.out" });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.4, ease: "power1.in" });
  });
});
