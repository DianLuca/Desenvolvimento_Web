document.addEventListener('DOMContentLoaded', function () {
    let valor = document.querySelector('#valor1');

    const btn = document.querySelector('button');

    let resultado = document.querySelector('#resultado');

    btn.addEventListener('click', function() {

        let num = valor.value;

        if (num < 0) {
            resultado.textContent = `O número " ${num} " é negativo.`;
        } else {
            resultado.textContent = `O número " ${num} " é positivo.`;
        }
    });

})