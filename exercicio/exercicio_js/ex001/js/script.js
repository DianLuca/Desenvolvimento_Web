document.addEventListener('DOMContentLoaded', function () {
    let valor1 = document.querySelector('#valor1');

    let valor2 = document.querySelector('#valor2');

    const adicao = document.querySelector('#adicao');
    const subtracao = document.querySelector('#subtracao');
    const multiplicacao = document.querySelector('#multiplicacao');
    const divisao = document.querySelector('#divisao');

    let resultado = document.querySelector('#resultado');

    // Posso fazer isso com switch

    adicao.addEventListener('click', function() {

        if (valor1.value == '' || valor2.value == '') {
            resultado.textContent = 'Insira valores para executar as operações!';
        } else {
            let operacao = parseFloat(valor1.value) + parseFloat(valor2.value);

            resultado.textContent = operacao;
        };
    });

    subtracao.addEventListener('click', function() {

        if (valor1.value == '' || valor2.value == '') {
            resultado.textContent = 'Insira valores para executar as operações!';
        } else {
            
            let operacao = parseFloat(valor1.value) - parseFloat(valor2.value);
    
            resultado.textContent = operacao;
        };
    });

    multiplicacao.addEventListener('click', function() {

        if (valor1.value == '' || valor2.value == '') {
            resultado.textContent = 'Insira valores para executar as operações!';
        } else {
            
            let operacao = parseFloat(valor1.value) * parseFloat(valor2.value);
    
            resultado.textContent = operacao;
        };
    });

    divisao.addEventListener('click', function() {

        if (valor1.value == '' || valor2.value == '') {
            resultado.textContent = 'Insira valores para executar as operações!';
        } else {

            if (valor2.value == 0) {
                resultado.textContent = 'Você não pode realizar um divisão por 0!';
            } else {
                let operacao = parseFloat(valor1.value) / parseFloat(valor2.value);
    
                resultado.textContent = operacao;
            };
        };
        
    });

})