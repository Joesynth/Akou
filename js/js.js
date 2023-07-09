//alert("oi");

window.onload = () => {
  const audio = document.getElementById("BackgroundM");

  audio.addEventListener("progress", () => {
    const duration = audio.duration;
    if (duration > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          document.getElementById("buffered-amount").style.width = `${
            (audio.buffered.end(audio.buffered.length - 1 - i) * 100) / duration
          }%`;
          break;
        }
      }
    }
  });

  audio.addEventListener("timeupdate", () => {
    const duration = audio.duration;
    if (duration > 0) {
      document.getElementById("progress-amount").style.width = `${
        (audio.currentTime / duration) * 100
      }%`;
    }
  });
};


