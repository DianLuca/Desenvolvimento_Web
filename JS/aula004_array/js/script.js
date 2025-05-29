/* Arquivo de demonstração dos principais métodos de arrays em JS
cada seção explica um método diferente com exemplos práticos
*/ 

// Array base que será usado nos exemplos
let arrayExemplo = ['Maça', 'Banana', 'Laranja'];

/*
    Método push()
    Adiciona um ou mais elementos ao final do array e retonra o novo comprimento
*/

document.getElementById('botao-push').addEventListener('click', () => {
    // Cópia do array original para não modificá-lo diretamente - BOA PRÁTICA
    // Spread Operator(...) para criar uma cópia do array
    let array = [...arrayExemplo];

    // Armazena o resultado do push (novo tamanho do array)
    let novoComprimento = array.push('Manga', 'Abacaxi');

    // Exibe os resultados
    document.getElementById('resultado-push').innerHTML = `
        <strong>Array original:</strong>[${arrayExemplo.join(', ')}].<br>
        <strong>Elementos Adicionados:</strong>"Manga", "Abacaxi".<br>
        <strong>Novo comprimento do array:</strong> ${novoComprimento}.<br>
        <strong>Array modificado:</strong> [${array.join(', ')}].
    `;

});

/*
    Método pop()
    Remove o último elemento do array e retorna esse elemento
*/

document.getElementById('botao-pop').addEventListener('click', () => {
    let array = [...arrayExemplo];

    // Remove e armazena o último elemento
    let elementoRemovido = array.pop();

    // Exibe os resultados
    document.getElementById('resultado-pop').innerHTML = `
        <strong>Array original:</strong>[${arrayExemplo.join(', ')}].<br>
        <strong>Elemento removido:</strong> ${elementoRemovido}.<br>
        <strong>Array modificado:</strong> [${array.join(', ')}].
    `;

});

/*
    Método unshift()
    Adiciona um ou mais elementos no início do array e retonra o novo comprimento
*/

document.getElementById('botao-unshift').addEventListener('click', () => {
    let array = [...arrayExemplo];

    // Adiciona elementos no início e armazena o novo tamanho
    let novoComprimento = array.unshift('Morango', 'Goiaba');

    // Exibe os resultados
    document.getElementById('resultado-unshift').innerHTML = `
        <strong>Array original:</strong>[${arrayExemplo.join(', ')}].<br>
        <strong>Elementos adicionados:</strong> 'Morango', 'Goiaba'.<br>
        <strong>Novo comprimento do array:</strong> ${novoComprimento}.<br>
        <strong>Array modificado:</strong> [${array.join(', ')}].
    `;

});

/*
    Método shift()
    Remove o primeiro elemento do array e retorna esse elemento
*/

document.getElementById('botao-shift').addEventListener('click', () => {
    let array = [...arrayExemplo];

    // Remove e armazena o último elemento
    let elementoRemovido = array.shift();

    // Exibe os resultados
    document.getElementById('resultado-shift').innerHTML = `
        <strong>Array original:</strong>[${arrayExemplo.join(', ')}].<br>
        <strong>Elemento removido:</strong> ${elementoRemovido}.<br>
        <strong>Array modificado:</strong> [${array.join(', ')}].
    `;

});

/*
    Método splice()
    Altera o conteúdo de um array removendo, substituindo ou adicionando elementos
    Parâmentros: índice inicial, quantidade a remover, elementos a adicionar
*/
document.getElementById('botao-splice').addEventListener('click', () => {
    let array = [...arrayExemplo];

    // Remove 1 elemento a partir do indice 1 e adiciona 'Kiwi' e 'Uva'
    let elementosRemovidos = array.splice(1, 1, 'Kiwi', 'Uva');

    document.getElementById('resultado-splice').innerHTML = `
        <strong>Array original:</strong>[${arrayExemplo.join(', ')}].<br>
        <strong>Operação:</strong> array.splice(1, 1, 'Kiwi', 'Uva').<br>
        <strong>Elementos removidos:</strong> [${elementosRemovidos.join(', ')}].<br>
        <strong>Array modificado:</strong> [${array.join(', ')}].
    `;
})

/*
    Método slice()
    Retorna uma cópia de parte de um array em um novo array
    Parâmentros: índice inicial (inclusivo), índice final (exclusivo)
*/
document.getElementById('botao-slice').addEventListener('click', () => {

    // Não precisa de cópia pois slice já retorna um novo array
    let novoArray = arrayExemplo.slice(1, 3); // 1, 3 posicionamento entre os elementos dentro do array

    document.getElementById('resultado-slice').innerHTML = `
        <strong>Array original:</strong>[${arrayExemplo.join(', ')}].<br>
        <strong>Operação:</strong> array.slice(1, 3).<br>
        <strong>Novo array retornado:</strong> [${novoArray.join(', ')}].<br>
        <strong>Array original permanece inalterado:</strong> [${arrayExemplo.join(', ')}].
    `;
})

