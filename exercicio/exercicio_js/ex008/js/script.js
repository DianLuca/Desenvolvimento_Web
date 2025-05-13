document.addEventListener('DOMContentLoaded', function () {
    // Sempre retornará string vindo de um input
    let input = document.querySelector('#texto');

    const verificar = document.querySelector('#verificar');

    let resultado = document.querySelector('#resultado');

    verificar.addEventListener('click', function() {
        let valor = input.value.toLowerCase();

        let tipo;

        if (!isNaN(valor) && valor.trim() !== "") {
            // Verifica se é um número (int ou float)
            tipo = "number";
        } else if (valor === "true" || valor === "false") {
            tipo = "boolean";
        } else {
            tipo = "string";
        };

        resultado.textContent = `O tipo do valor inserido é: ${tipo}.`
    });
})