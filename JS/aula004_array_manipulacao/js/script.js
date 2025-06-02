/**
 * Arquivo: metodo.js
 * Descrição: Demonstração dos principais métodos de iteração de arrays em JS
 * Autor:  [Seu Nome]
 * Data: [Data]
 * Versão: 1.0
 */

// =================================================
// Dados de Exemplo
// =================================================

// Array de números para exemplos básicos
const numeros = [1, 2, 3, 4, 5];

// Array de objetos (pessoas) para exemplos mais complexos
const pessoas = [
    {nome: 'Gal Gadot', idade: 40, cidade: 'Rosh HaAyin'},
    {nome: 'Elizabeth Olsen', idade: 36, cidade: 'Sherman Oaks'},
    {nome: 'Alenxandra Daddario', idade: 39, cidade: 'Nova York'},
    {nome: 'Anna de Armas', idade: 37, cidade: 'Havana'},
    {nome: 'Grace Kelly', idade: 95, cidade: 'Filadélfia'},
    {nome: 'Jaz Sinclair', idade: 17, cidade: 'Dallas'}
];

// =================================================
// Métodos de Iteração
// =================================================

/**
 * Método: forEach() (paraCada)
 * Descrição: Executa uma função para cada elemento do array
 * NÃO RETORNA um novo array
 */

document.getElementById('botao-paraCada').addEventListener('click', () => {
    // Variável para acumular os resultados
    let resultado = '';
    // Usando forEach para iterar sobre cada número
    numeros.forEach(function(numero, indice) {
        resultado += `Posição ${indice}: ${numero}\n`
    });

    // Exibindo o resultado na página
    document.getElementById('resultado-paraCada').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Iteração com forEach:</strong> <br>
        ${resultado}
        <small>Observação: forEach não retorna um novo array.</small>
        `;
})

/**
 * Método: map() (mapear)
 * Descrição: Cria um novo array com os resultados de uma função aplicada a cada elemento
 */

document.getElementById('botao-mapear').addEventListener('click', () => {
    // Usando map para criar um novo array com os quadrados dos números
    const quadrados = numeros.map((numero)=> {
        return numero * numero;
    });
    

    // Exibindo o resultado na página
    document.getElementById('resultado-mapear').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Array com quadrados (map):</strong> ${JSON.stringify(quadrados)}<br><br>
        <small>Observação: map sempre retorna um novo array do mesmo tamanho</small>
        `;
})

/**
 * Método: filter() (filtrar)
 * Descrição: Cria um novo array com elemetos que passam em um teste (função)
 */

document.getElementById('botao-filtrar').addEventListener('click', () => {
    // Filtrando apenas pessoas com idade >= 18
    const maioresDeIdade = pessoas.filter((pessoa) => {
        return pessoa.idade >= 18;
    });
    

    // Exibindo o resultado na página
    document.getElementById('resultado-filtrar').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Maiores de idade (filter):</strong> ${JSON.stringify(maioresDeIdade, null, 2)}<br><br>
        <small>Observação: filter retorna um novo array apenas com os elementos que passam no teste</small>
        `;
})

/**
 * Método: reduce() (reduzir)
 * Descrição: Reduz o array a um único valor usando uma função acumuladora
 */

document.getElementById('botao-reduzir').addEventListener('click', () => {
    // Somando todos os números do array
    const somaTotal = numeros.reduce(( acumulador, numeroAtual) => {
        return acumulador + numeroAtual;
    }, 0);  // 0 é o valor inicial do acumulador
    

    // Exibindo o resultado na página
    document.getElementById('resultado-reduzir').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Soma Total (reduce):</strong> ${somaTotal}<br><br>
        <small>Observação: reduce pode transformar um array em qualquer tipo de valor</small>
        `;
})

/**
 * Método: find() (encontrar)
 * Descrição: Retorna o primeiro elemento que satisfaz uma condição
 */

document.getElementById('botao-encontrar').addEventListener('click', () => {
    // Encontrando a primeira pessoa menor de idade
    const menorDeIdade = pessoas.find((pessoa) => {
        return pessoa.idade < 18;
    });
    

    // Exibindo o resultado na página
    document.getElementById('resultado-encontrar').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Primeiro menor de idade(find):</strong> ${JSON.stringify(menorDeIdade)}<br><br>
        <small>Observação: find retorna apenas o primeiro elemento encontrado</small>
        `;
})

/**
 * Método: some() (algum) e every () (todos)
 * Descrição: 
 *  - some (): Verifica se pelo menos um elemento satisfaz a condição
 *  - every (): Verifica se todos os elementos satisfazem a condição
 */

document.getElementById('botao-algum').addEventListener('click', () => {
    // Verificando se há pelo menos um menor de idade
    const existeMenor = pessoas.some((pessoa) => {
        return pessoa.idade < 18;
    });
    

    // Exibindo o resultado na página
    document.getElementById('resultado-algum').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Primeiro menor de idade(some):</strong> ${existeMenor ? 'Sim' : 'Não'}<br><br>
        <small>Observação: some retorna true se pelo menos um elemento passar no teste</small>
        `;
})

document.getElementById('botao-todos').addEventListener('click', () => {
    // Verificando se todos são maiores de idade
    const todosMaiores = pessoas.every((pessoa) => {
        return pessoa.idade >= 18;
    });
    

    // Exibindo o resultado na página
    document.getElementById('resultado-todos').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Primeiro menor de idade(some):</strong> ${todosMaiores ? 'Sim' : 'Não'}<br><br>
        <small>Observação: some retorna true se TODOS os elementos passarem no teste</small>
        `;
})

