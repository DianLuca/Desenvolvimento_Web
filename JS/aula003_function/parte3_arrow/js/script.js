// FUNÇÕES DE CÁLCULO (Arrow Functions)
const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;

// FUNÇÃO DE EXIBIÇÃO DE RESULTADOS

function mostrarResultado(operacao, texto) {
    // Elementos do DOM
    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    // Casting do valor para decimal
    const numero = parseFloat(input.value);

    // Validando a entrada
    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido!';
        resultado.style.color = '#ff0000';
        return;
    }

    // Executa a operação matemática (dobrar ou triplicar)
    const valor = operacao(numero);

    // Formata a saída
    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color = '#000000';
}

// EVENT LISTENERS - INTERAÇÕES DO USUÁRIO

// Para calcular o dobro do valor 
document.getElementById('dobro').addEventListener('click', () => {
    mostrarResultado(dobrar, 'O dobro');
});

// Para calcular o triplo do valor
document.getElementById('triplo').addEventListener('click', () => {
    mostrarResultado(triplicar, 'O triplo');
});

// Calcula o valor inserido a partir da tecla enter
document.getElementById('numero').addEventListener('keypress', (evento) => {
    
    // if (evento.key === 'Enter') {
    //     // Por padrão executa o dobro quando o Enter é pressionado
    //     mostrarResultado(dobrar, 'O dobro');
    // };

    if (evento.key === "d") {
        mostrarResultado(dobrar, 'O dobro');
    }

    if (evento.key === "t") {
        mostrarResultado(triplicar, 'O triplo');
    }

    
});



// keypress 2 = 50
// keypress 3 = 51