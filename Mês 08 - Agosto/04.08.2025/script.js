let contador = 1;
const frutas = ['maçã', 'banana', 'laranja'];
let indiceVetor = 0;
let estaAparecendo = true;

function botaoUm() {
    document.getElementById('um').innerHTML = "Hello, world";
}


function botaoDois() {
    document.getElementById('dois').innerHTML = contador;
    contador++;
}


function botaoTres() {

    document.getElementById('tres').innerHTML = frutas[indiceVetor];
    indiceVetor++;
    if (indiceVetor === frutas.length) {
        indiceVetor = 0;
    }

}

function botaoQuatro() {
    if (estaAparecendo) {
        document.getElementById('quatro').style.visibility = 'hidden'
        estaAparecendo = false;
    } else {
        document.getElementById('quatro').style.visibility = 'visible'
        estaAparecendo = true;
    }
}

