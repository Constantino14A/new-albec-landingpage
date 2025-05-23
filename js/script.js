const iconVolUp = `
<svg class="icon" viewBox="0 -960 960 960" width="24" height="24" fill="#e8e8e8">
  <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252Z"/>
</svg>`;

const iconVolMute = `
<svg class="icon" viewBox="0 -960 960 960" width="24" height="24" fill="#e8e8e8">
  <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Z"/>
</svg>`;

// document.addEventListener("DOMContentLoaded", function () {

//   // Video elementos
//   const video = document.getElementById("video-clientes");
//   const muteBtn = document.getElementById("mute-toggle");
//   const volumenRange = document.getElementById("volumen-range");

//   let isDragging = false;

//   // Inicializar estado
//   video.volume = 0;
//   video.muted = true;
//   volumenRange.value = 0; // Barra de volumen al 0 al principio

//   // Función para actualizar el ícono de volumen
//   function updateVolumeUI() {
//     muteBtn.innerHTML = video.muted || video.volume === 0 ? iconVolMute : iconVolUp;
//   }

//   // Función que ajusta el volumen desde la barra
//   volumenRange.addEventListener("input", () => {
//     const vol = volumenRange.value / 100;
//     video.volume = vol;
//     video.muted = vol === 0;
//     updateVolumeUI();
//   });

//   // Toggle de mute
//   muteBtn.addEventListener("click", () => {
//     if (video.muted) {
//       video.muted = false;
//       if (video.volume === 0) {
//         video.volume = 0.29; // Si desmutea y volumen está en 0, poner mínimo
//         volumenRange.value = 29;
//       }
//     } else {
//       video.muted = true;
//       video.volume = 0; // Si mutea, bajamos el volumen a 0
//       volumenRange.value = 0;
//     }
//     updateVolumeUI();
//   });

//   // Para reiniciar video cuando vuelves a la pestaña
//   document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "visible") {
//       video.currentTime = 0;
//       video.play();
//     }
//   });

//   updateVolumeUI();

// });

/* SCRIPTS */

// definir umbrales de scroll por tamaños de pantalla
let umbralScroll = 0;

function actualizarUmbral() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    umbralScroll = 285; // móviles
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    umbralScroll = 450; // tablets
  } else {
    umbralScroll = 400; // desktops
  }
}

// llamada cada que se actualiza el ancho
actualizarUmbral();
window.addEventListener('resize', actualizarUmbral);

// para desvanecimiento de header
const header = document.querySelector('.header');
// definir último scroll
let ultimoScroll = window.scrollY;
window.addEventListener('scroll', () => {
  const actualScroll = window.scrollY;

  if (checkbox.checked) return;

  if (actualScroll > umbralScroll) {
    if (actualScroll > ultimoScroll) {
      header.classList.add('ocultar-header');
    } else {
      header.classList.remove('ocultar-header');
    }
  }
  ultimoScroll = actualScroll;
});

// para video de clientes
document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#video-clientes', {
    autoplay: true,
    muted: true,
    loop: { active: true },
    controls: ['play', 'progress', 'mute', 'volume'] // quitaste 'fullscreen'
  });

  // Asegurar reproducción automática en algunos navegadores
  player.muted = true;
  player.play().catch(() => {
    // Algunos navegadores requieren interacción del usuario
    console.warn('Requiere interacción para reproducir el video.');
  });
});

// para animaciones con AOS
AOS.init();

// para menu hamburguer
const checkbox = document.querySelector('#menu-toggle');
const enlaces = document.querySelector('#menu-enlaces');
const enlace = document.querySelectorAll('.navbar__enlace');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    enlaces.classList.add('navbar__enlaces--hamburguer');
    enlace.classList.add('navbar__enlace--hamburguer');
  } else {
    enlaces.classList.remove('navbar__enlaces--hamburguer');
    enlace.classList.remove('navbar__enlace--hamburguer');
  }
})