const saudacao = function (nome) {
    return `Olá, ${nome}! Seja bem-vindo(a).`;
};

const mostrarResultado = (mensagem) => {

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

document.addEventListener('DOMContentLoaded', () => {
    const inputNome = document.getElementById('nome');
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');

    saudarBtn.addEventListener('click', ()=> {

        let nome = inputNome.value;

        if (nome === '') {
            nome = 'Mundo'
        }
        
        const mensagem = saudacao(nome);

        mostrarResultado(mensagem);
    });
})