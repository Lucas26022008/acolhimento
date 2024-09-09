let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while (nomeUsuário === "") {
    nomeUsuário = prompt("Digite seu nome por favor!");

    if (nomeUsuário === null) {
        nomeUsuário = "visitante"; // Caso o usuário cancele, o nome será "visitante"
        break;
    }
}

elemento.textContent = nomeUsuário;
