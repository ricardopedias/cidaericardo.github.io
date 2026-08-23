
window.addEventListener("load", function() {
    const qrcodeImage = document.getElementById("copiar-qrcode");

    if (qrcodeImage !== null) {
        qrcodeImage.addEventListener("click", () => {
            copiar(qrcodeImage.dataset.code);
        });
    }
});

function copiar(codigo)
{
  navigator.clipboard.write([
    new ClipboardItem({
      "text/plain": new Blob([codigo], { type: "text/plain" })
    })
  ]).then(() => alert("QR Code copiado!"));
}

function abrirEmTelaCheia()
{
  let elem = document.body;

  alert('fullscreen');

  // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
  if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
      if (elem.requestFullScreen) {
          elem.requestFullScreen();
      } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
      }
  } else {
      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }
}
