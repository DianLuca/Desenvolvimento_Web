// Aguarda o evento carregando todo o documento
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referência ao botão com ID 'calcularBtn'
    const botao = document.getElementById('calcularBtn');

    // Adiciona um listener de evento de clique ao botão 
    botao.addEventListener('click', ()=> {
        // Obtém referência ao input com DOM 'ladoInput'
        const input = document.getElementById('ladoInput');
        // Converte o valor do input para númro decimal
        const lado = parseFloat(input.value);

        // Verifica se o valor é inválido (não é número ou é menor/igual a zero)
        if (isNaN(lado)  || lado <= 0) {
            // Mostra mensagem de erro se o valor for inválido
            mostrarMensagem('Por favor, insira um valor válido maior que zero.');
            return; // Sai da função se o valor for inválido
        }

        // Calcula a área do quadrado com lado fornecido
        const area = calcularAreaQuadrado(lado);
        // Mostra o resultado do cálculo
        mostrarMensagem(`À área do quadrado com lado ${lado} é: ${area}.`);
    });
});

// Função que calcular a área de um quadrado (lado * lado)
function calcularAreaQuadrado(lado) {
    return lado * lado;
}

// Função que exibe mensagens no elemento com ID 'resultado'
function mostrarMensagem(texto) {
    const resultado = document.getElementById('resultado');
    resultado.textContent =  texto;
}