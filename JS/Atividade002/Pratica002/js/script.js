document.addEventListener('DOMContentLoaded', () => {
    const corpo = document.querySelector('body');
    const caixaResposta = document.querySelector('#resultado');

    const fundo = document.querySelector('#fundo');
    const texto = document.querySelector('#texto');
    const caixa = document.querySelector('#caixa');


    fundo.addEventListener('input', ()=> {
        corpo.style.backgroundColor = fundo.value;
    })

    texto.addEventListener('input', ()=> {
        caixaResposta.style.color = texto.value;
    })

    caixa.addEventListener('input', ()=> {
        caixaResposta.style.backgroundColor = caixa.value;
    })

})