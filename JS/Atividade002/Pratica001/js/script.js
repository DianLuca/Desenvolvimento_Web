document.addEventListener('DOMContentLoaded', () => {
    const adicionar = document.querySelector('#adicionar');

    const subtrair = document.querySelector('#subtrair');

    const zerar = document.querySelector('#zerar');

    const resultado = document.querySelector('#resultado');

    let num = 0; // para armazenar o valor a ser calculado.

    adicionar.addEventListener('click', () => {

        let calculo = num += 1;

        resultado.textContent = calculo;

    });

    subtrair.addEventListener('click', () => {

        let calculo = num -= 1;

        resultado.textContent = calculo;

    });
    
    zerar.addEventListener('click', () => {
        num = 0

        resultado.textContent = num;

    });

});