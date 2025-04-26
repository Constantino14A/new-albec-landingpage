const iconVolUp = `
<svg class="icon" viewBox="0 -960 960 960" width="24" height="24" fill="#e8e8e8">
  <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252Z"/>
</svg>`;

const iconVolMute = `
<svg class="icon" viewBox="0 -960 960 960" width="24" height="24" fill="#e8e8e8">
  <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Z"/>
</svg>`;

// Locomotive Scroll
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

// video testimonios
const video = document.getElementById("video-clientes");
const muteBtn = document.getElementById("mute-toggle");
const volumenBtn = document.getElementById("volumen-toggle");
const volumenBar = document.getElementById("volumen-barra");


// Mostrar/ocultar barra
volumenBtn.addEventListener("click", () => {
  const isVisible = volumeBar.style.display === "block";
  volumenBar.style.display = isVisible ? "none" : "block";
});

// Toggle mute
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;

  if (video.muted) {
    muteBtn.innerHTML = iconVolMute;  // Cambiar a ícono de mute
    volumenBar.value = 0;
  } else {
    muteBtn.innerHTML = iconVolUp;    // Cambiar a ícono de volumen
    if (volumenBar.value == 0) {
      volumenBar.value = 29;
      video.volume = 0.29;
    }
  }
});

// Cambiar volumen con la barra
volumenBar.addEventListener("input", () => {
  const vol = volumenBar.value / 100;
  video.volume = vol;

  if (vol === 0) {
    video.muted = true;
    muteBtn.innerHTML = iconVolMute;  // Cambiar a ícono de mute
  } else {
    video.muted = false;
    muteBtn.innerHTML = iconVolUp;    // Cambiar a ícono de volumen
  }
});

// Toggle de la visibilidad de la barra de volumen
volumenBtn.addEventListener("click", () => {
  volumenBtn.classList.toggle("active");
  if (volumenBtn.classList.contains("active")) {
    volumenBar.style.display = "block";
  } else {
    volumenBar.style.display = "none";
  }
});

document.addEventListener("visibilitychange", () => {
  const video = document.getElementById("video-clientes");
  if (document.visibilityState === "visible") {
    video.currentTime = 0;
    video.play();
  }
});