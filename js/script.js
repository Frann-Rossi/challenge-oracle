const encriptado = document.querySelector("#encriptado");
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const contenedorImpreso = document.querySelector(".contenedor.impreso");

btnEncriptar.addEventListener("click", () => {
	const contenido = encriptado.value;
	const contenidoEncriptado = encriptar(contenido);
	const elementoImpreso = document.createElement("div");
	elementoImpreso.innerHTML = `<p>Texto encriptado: ${contenidoEncriptado}</p>
    <button id="btnCopiarEncriptado">Copiar</button>
  `;
	contenedorImpreso.innerHTML = "";
	contenedorImpreso.appendChild(elementoImpreso);

	const btnCopiarEncriptado = document.querySelector("#btnCopiarEncriptado");
	btnCopiarEncriptado.addEventListener("click", () => {
		navigator.clipboard.writeText(contenidoEncriptado);
		alert("Texto Copiado");
	});
});

btnDesencriptar.addEventListener("click", () => {
	const contenido = encriptado.value;
	const contenidoDesencriptado = desencriptar(contenido);
	const elementoImpreso = document.createElement("div");
	elementoImpreso.innerHTML = `<p>Texto desencriptado: ${contenidoDesencriptado}</p>
    <button id="btnCopiarDesencriptado">Copiar</button>
  `;
	contenedorImpreso.innerHTML = "";
	contenedorImpreso.appendChild(elementoImpreso);

	const btnCopiarDesencriptado = document.querySelector(
		"#btnCopiarDesencriptado"
	);
	btnCopiarDesencriptado.addEventListener("click", () => {
		navigator.clipboard.writeText(contenidoDesencriptado);
		alert("Texto Copiado");
	});
});

// function encriptar(texto) {
// 	let textoEncriptado = "";
// 	for (let i = 0; i < texto.length; i++) {
// 		switch (texto[i]) {
// 			case "e":
// 				textoEncriptado += "enter";
// 				break;
// 			case "i":
// 				textoEncriptado += "imes";
// 				break;
// 			case "a":
// 				textoEncriptado += "ai";
// 				break;
// 			case "o":
// 				textoEncriptado += "ober";
// 				break;
// 			case "u":
// 				textoEncriptado += "ufat";
// 				break;
// 			default:
// 				textoEncriptado += texto[i];
// 				break;
// 		}
// 	}
// 	return textoEncriptado;
// }
function encriptar(texto) {
	texto = texto.replaceAll("e", "enter");
	texto = texto.replaceAll("i", "imes");
	texto = texto.replaceAll("a", "ai");
	texto = texto.replaceAll("o", "ober");
	texto = texto.replaceAll("u", "ufat");
	return texto;
}

function desencriptar(texto) {
	texto = texto.replaceAll("enter", "e");
	texto = texto.replaceAll("imes", "i");
	texto = texto.replaceAll("ai", "a");
	texto = texto.replaceAll("ober", "o");
	texto = texto.replaceAll("ufat", "u");
	return texto;
}
