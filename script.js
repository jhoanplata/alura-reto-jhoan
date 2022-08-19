const inputText = document.querySelector(".input_Text");
const message = document.querySelector(".mensaje");


function btnEncriptar() {
  const textoEncriptado = encriptar(inputText.value)
  message.value = textoEncriptado;
  message.style.backgroundImage = "none"
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
  message.value = ""
}


// const textoIngresado = document.querySelectorById("text_area");
// const textoResultado = document.querySelectorById("text_result");

// const btnEncriptar = document.querySelectorById("encriptar");
// const btnDesencriptar = document.querySelectorById("desencriptar");
// const btnCopiar = document.querySelectorById("copiar");

// function encriptar (){

//   let texto = textoIngresado.value.toLowerCase();
//   let textoEncriptado = texto
//   .replaceAll("e", "enter")
//   .replaceAll("i", "imes")
//   .replaceAll("o", "ober")
//   .replaceAll("a", "ai")
//   .replaceAll("u", "ufat");

//   document.getElementById("finalSentence").style.visibility = "hidden";
//   document.getElementById("copiar").style.visibility = "visible";

//   textoResultado.value = textoEncriptado;

//   document.getElementById("sentence").value = '';

// }

// function desencriptar (){
//   let textoEncriptado = textoIngresado.value.toLowerCase();
//   let texto = textoEncriptado
//   .replaceAll("enter", "e")
//   .replaceAll("imes", "i")
//   .replaceAll("ober", "o")
//   .replaceAll("ai", "a")
//   .replaceAll("ufat", "u");

//   document.getElementById("finalSentence").style.visibility = "hidden";
//   document.getElementById("copiar").style.visibility = "visible";

//   textoResultado.value = texto;

//   document.getElementById("sentence").value = '';

// }

// function copiar () {
//   let textoEncriptado = textoResultado.value;
//   navigator.clipboard.writeText(textoEncriptado);
// }

// btnEncriptar.addEventListener("click", encriptar);
// btnDesencriptar.addEventListener("click", desencriptar);

// btnCopiar.addEventListener("click", copiar);
