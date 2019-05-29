



var esquerda = document.querySelector(".esquerda");
var direita = document.querySelector(".direita");
var nav = document.querySelector(".nav");
var tamanhoMaximo =  Math.round(document.querySelectorAll(".foto").length/3)
var contador = 1;
var tamanhoAtual = contador * 300;


function transactionDireita() {
    if (tamanhoAtual > tamanhoMaximo) {
        nav.style.left = "-"+ 300 * contador + "px"
        contador++;
        tamanhoAtual +=300;
    } else {
        contador = 0;
        nav.style.left = "0px"
    }

}
function transactionEsquerda() {
    if (contador == 1) {
        nav.style.left = '-'+300 * tamanhoMaximo + "px"
        contador = tamanhoMaximo;
    } else {
        contador--;
        nav.style.left = 300 * contador + "px"
        contador++;
        tamanhoAtual= 300 * contador;
    }
}

esquerda.addEventListener('click', function (ev) {
    transactionEsquerda()
});
direita.addEventListener('click', function (ev) {
    transactionDireita()
});
// });
// navegar(0);
// .onclick = function (e) {
//     e.preventDefault();
//     menuLateral.style.marginLeft = "0";
// };