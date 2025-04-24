document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothMobile: true,
      lerp: 0.07, // Controla la suavidad del desplazamiento (0.07 es un buen punto medio)
      multiplier: 1.0, // Velocidad del scroll (1.0 para una sensación natural)
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });
  });
  