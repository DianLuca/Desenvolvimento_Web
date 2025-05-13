document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#valor');

    const verificar = document.querySelector('#verificar');

    let resultado = document.querySelector('#resultado');

    // Pega um número aleatório entre 0 e 1
    const numAleatorio = Math.random() * 10;

    // Arredondar pro inteiro mais próximo
    const arrendondar = Math.round(numAleatorio);

    console.log(arrendondar);

    verificar.addEventListener('click', function() {

        let valor = input.value;

        if (arrendondar == valor) {
            resultado.textContent = 'Você acertou!'
        } else if (valor < arrendondar) {
            resultado.textContent = 'Tente um valor maior.'
        } else {
            resultado.textContent = 'Tente um valor menor.'
        }

    });

})