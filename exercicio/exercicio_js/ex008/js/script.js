document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#texto');

    const verificar = document.querySelector('#verificar');

    let resultado = document.querySelector('#resultado');

    verificar.addEventListener('click', function() {
        let texto = input.value;

        const tipoDado = typeof(texto);
        // Sempre retornará string vindo de um input
        resultado.textContent = `O tipo do dado inserido é: ${tipoDado}.`;
    });

})