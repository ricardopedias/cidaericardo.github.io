
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
