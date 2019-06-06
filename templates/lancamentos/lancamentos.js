



var esquerda = document.querySelector(".esquerda");
var direita = document.querySelector(".direita");
var nav = document.querySelector(".nav");
var contador = 0;


function transactionDireita() {
    contador++;
    if (contador >= 1 && contador != 2) {
        nav.style.left = "-"+ 50 * contador + "%"
    }

}
function transactionEsquerda() {
    contador--;
    if (contador != 1 && contador <= 2) {
        nav.style.left = 50 * contador + "%"
       
    }
}

esquerda.addEventListener('click', function (ev) {
    transactionEsquerda()
});
direita.addEventListener('click', function (ev) {
    transactionDireita()
});

var esquerdaSegundoCard = document.getElementById("#esquerdaSegundoCard");
var direitaSegundoCard = document.getElementById("#direitaSegundoCard");
var navSegundoCard = document.querySelector("#navSegundoCard");
var contadorSegundoCard = 0;


function transactionDireitaSegundoCard() {
    contadorSegundoCard++;
    if (contadorSegundoCard >= 1 && contadorSegundoCard != 2) {
        navSegundoCard.style.left = "-"+ 50 * contadorSegundoCard + "%"
    }

}
function transactionEsquerdaSegundoCard() {
    contadorSegundoCard--;
    if (contadorSegundoCard != 1 && contadorSegundoCard <= 2) {
        navSegundoCard.style.left = 50 * contadorSegundoCard + "%"
       
    }
}

esquerdaSegundoCard.addEventListener('click', function (ev) {
    transactionEsquerda()
});
direitaSegundoCard.addEventListener('click', function (ev) {
    transactionDireita()
});
