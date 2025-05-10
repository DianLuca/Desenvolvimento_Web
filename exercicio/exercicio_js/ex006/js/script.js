document.addEventListener('DOMContentLoaded', function () {
    let texto = document.querySelector('#texto');

    const verificar = document.querySelector('#verificar');
    
    let resultado = document.querySelector('#resultado');

    verificar.addEventListener('click', function() {

        let conteudo = texto.value;
        // Para transformar o texto todo em minúsculo e remover espaços
        let replacer = /[^a-z0-9]/gi;

        let converterTexto = conteudo.toLowerCase().replace(replacer, '');

        // .split para converter de string para array e join para voltar, reverse para inverter
        let inverterTexto = converterTexto.split('').reverse().join('');

        if (converterTexto == inverterTexto){

            resultado.textContent = `A palavra/frase é um palíndromo!`;
        } else {

            resultado.textContent = 'A palavra/frase não é um palíndromo!';
        }
    });

})