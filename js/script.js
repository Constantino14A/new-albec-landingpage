const iconVolUp = `
<svg class="icon" viewBox="0 -960 960 960" width="24" height="24" fill="#e8e8e8">
  <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252Z"/>
</svg>`;

const iconVolMute = `
<svg class="icon" viewBox="0 -960 960 960" width="24" height="24" fill="#e8e8e8">
  <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Z"/>
</svg>`;

document.addEventListener("DOMContentLoaded", function () {
  // Locomotive Scroll
  new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true,
    lerp: 0.07,
    multiplier: 1.0,
    smartphone: { smooth: true },
    tablet: { smooth: true }
  });

  // Video elementos
  const video = document.getElementById("video-clientes");
  const muteBtn = document.getElementById("mute-toggle");
  const volumenBar = document.getElementById("volumen-barra");
  const volumenFill = document.getElementById("volumen-fill");

  let isDragging = false;

  // Inicializar estado
  video.volume = 0;
  video.muted = true;
  updateVolumeUI();

  // --- Funciones reutilizables ---
  
  function updateVolumeUI() {
    volumenFill.style.height = `${video.volume * 100}%`;
    muteBtn.innerHTML = video.muted ? iconVolMute : iconVolUp;
  }

  function setVolumeFromPosition(y) {
    const rect = volumenBar.getBoundingClientRect();
    const percentage = 1 - (y - rect.top) / rect.height;
    const volume = Math.max(0, Math.min(1, percentage));

    video.volume = volume;
    video.muted = volume === 0;
    updateVolumeUI();
  }

  // --- Event Listeners ---
  
  muteBtn.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false;
      if (video.volume === 0) {
        video.volume = 0.29; // Si desmutea y volumen está en 0, poner mínimo
      }
    } else {
      video.muted = true;
      video.volume = 0; // Si mutea, bajamos el volumen a 0
    }
    updateVolumeUI();
  });

  volumenBar.addEventListener("click", (e) => {
    setVolumeFromPosition(e.clientY);
  });

  volumenBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    volumenFill.style.transition = "none";
    setVolumeFromPosition(e.clientY);
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      setVolumeFromPosition(e.clientY);
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      volumenFill.style.transition = "height 0.2s ease";
      isDragging = false;
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      video.currentTime = 0;
      video.play();
    }
  });
});