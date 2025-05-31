function abrirVentana(url) {
    document.getElementById("ventana").style.display = "flex";
    document.getElementById("ventana-iframe").src = url;
  }
  
  function cerrarVentana() {
    document.getElementById("ventana").style.display = "none";
    document.getElementById("ventana-iframe").src = "";
  }
  
function hacerArrastrable(elemento, barra) {
  let offsetX = 0, offsetY = 0, isDragging = false;

  barra.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - elemento.offsetLeft;
    offsetY = e.clientY - elemento.offsetTop;
    elemento.style.position = 'absolute';
    elemento.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      elemento.style.left = (e.clientX - offsetX) + 'px';
      elemento.style.top = (e.clientY - offsetY) + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

window.onload = () => {
  const ventana = document.getElementById('ventana');
  const barra = ventana.querySelector('.barra');
  hacerArrastrable(ventana, barra);
};

gsap.from(".app", {
  y: -10,
  opacity: 0,
  stagger: 0.1,
  duration: 3,
  ease: "back.out(1.5)"
});

document.querySelectorAll('.app').forEach(app => {
  app.addEventListener('mouseenter', () => {
    gsap.to(app, {
      scale: 1.1,
      duration: 0.2,
      ease: "power1.out"
    });
  });

  app.addEventListener('mouseleave', () => {
    gsap.to(app, {
      scale: 1,
      duration: 0.2,
      ease: "power4.inOut"
    });
  });
});
