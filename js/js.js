//alert("oi");



window.onload = () => {


	/* trecho var samp e if escrito por mim de cabeça
	var samp = document.querySelector("samp").innerHTML;
	if (samp === "") {
		document.querySelector("samp").innerHTML = "bem-vindo";
	}
	*/





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


