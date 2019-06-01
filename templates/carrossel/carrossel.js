



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
