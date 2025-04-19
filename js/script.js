const cuentaRegresiva = new Date("2025-05-02T18:00:00-05:00").getTime(); // Hora Lima

function actualizaContador() {
  const ahora = new Date().getTime();
  const distancia = cuentaRegresiva - ahora;

  if (distancia < 0) {
    document.getElementById("contador").innerHTML = "¡Tiempo cumplido!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = String(dias).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

setInterval(actualizaContador, 1000);
actualizaContador(); // Llamada inicial

  // window.addEventListener('load', () => {
  //   const audio = document.getElementById('miAudio');
  //   audio.play().catch(e => {
  //     console.warn('Reproducción automática bloqueada. Intentando silenciar...');
  //     audio.muted = true;
  //     audio.play();
  //   });
  // });