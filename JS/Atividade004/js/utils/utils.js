export function validarEntrada(valor) {

    let resultado = document.querySelector('.resultado');

    console.log('Entrou na validação!');
    if (valor === null || valor.trim() === ''){
        console.log('tá vazio ou nulo!')
        resultado.textContent = 'O campo não pode ser vazio.';
        return null;
    }
    
    let numero = Number(valor);
    
    if (isNaN(numero)) {
        resultado.textContent = 'O campo deve conter apenas valores numéricos.';
        return null;
    }
    
    return valor;
};

export function adicionarEventoBotao(botao, funcao) {
    botao.addEventListener('click', funcao);
};