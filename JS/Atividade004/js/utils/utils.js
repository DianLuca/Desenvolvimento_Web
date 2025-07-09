export function validarEntrada(valor) {

    let resultado = document.querySelector('.resultado');
    // console.log(valor);

    console.log('Entrou na validação!');
    if (valor === null || valor.trim() === ''){
        // console.log('tá vazio ou nulo!');
        resultado.textContent = 'Nenhum campo acima pode ser vazio!';
        return null;
    }
    
    let numero = Number(valor);
    
    if (isNaN(numero)) {
        resultado.textContent = 'Informe apenas valores numéricos no(s) campo(s).';
        return null;
    }
    
    return valor;
};

function adicionarEventoBotao(botao, funcao) {
    botao.addEventListener('click', funcao);
};

export function validarEventoBotao(botao, funcao){
    if (botao) {
        adicionarEventoBotao(botao, funcao);
    };
};