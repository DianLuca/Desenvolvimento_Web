document.addEventListener('DOMContentLoaded', function () {

    const vermelho = document.querySelector('#vermelho');
    const verde = document.querySelector('#verde');
    const azul = document.querySelector('#azul');

    let resultado = document.querySelector('#saida');

    vermelho.addEventListener('click', function() {
        resultado.style.backgroundColor = '#FF0000';
        //outra forma resultado.setAttribute("class", "vermelho") para criar uma classe e mudar via css;
    });

    verde.addEventListener('click', function() {
        resultado.style.backgroundColor = '#00FF00';
        
    });

    azul.addEventListener('click', function() {
        resultado.style.backgroundColor = '#0000FF';
    });

    

})