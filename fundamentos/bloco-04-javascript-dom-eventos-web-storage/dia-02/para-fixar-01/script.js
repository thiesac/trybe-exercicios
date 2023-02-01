let pai = document.getElementById("pai");
let siblingElement = document.createElement("section");
siblingElement.innerText = "Eu sou o irmão";
pai.appendChild(siblingElement);

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
let childOne = document.createElement("p");
childOne.innerText = "Eu sou o filho do elementoOndeVoceEsta, sou um parágrafo";
elementoOndeVoceEsta.appendChild(childOne);

let primeiroFilhodoFilho = document.getElementById("primeiroFilhoDoFilho");
let childOfTheChild = document.createElement("li");
childOfTheChild.innerText = "arroz";
primeiroFilhodoFilho.appendChild(childOfTheChild);
