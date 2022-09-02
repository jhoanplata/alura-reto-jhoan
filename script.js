const inputText = document.querySelector(".input_Text");
const message = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar")
const imgocultar = document.getElementById("img_text")




function btnEncriptar() {
  const textoEncriptado = encriptar(inputText.value)
  message.value = textoEncriptado;
  message.style.backgroundImage = "none"
  imgocultar.style.visibility = "hidden"
  copiar.style.visibility = "visible"
  inputText.value = ""
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase(); //convertimos a minusculas //
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(inputText.value)
  message.value = textoEncriptado;
  message.style.backgroundImage = "none"
  imgocultar.style.visibility = "hidden"
  copiar.style.visibility = "visible"
  inputText.value = ""

}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase(); //convertimos a minusculas //
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function btncopiar() {
  message.select()
  document.execCommand("copy") //copiar el texto
  alert("Texto copiado")
  inputText.value = ""
}
