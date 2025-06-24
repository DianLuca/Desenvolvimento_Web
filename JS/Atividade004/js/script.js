// Variavéis globais

let verificar = document.querySelector('#verificar');
let resultado = document.querySelector('#resultado');

// Atividade A


function par_impar(valor) {
    if (valor % 2 == 0) {
        resultado.textContent = 'Este é um número par.'
    } else {
        resultado.textContent = 'Este é um número ímpar.'
    }
};

verificar.addEventListener('click', ()=> {
    let num = document.querySelector('#num');

    let valor = num.value || 0;

    par_impar(valor);
});

// Atividade B

function verificar_maior_menor (valor, valor1, valor2){
    let resposta_maior = '';
    let resposta_menor = '';

    if ((valor > valor1) && (valor > valor2)) {
        resposta_maior = `O ${valor} é o número de maior valor`;
        if (valor1 >= valor2) {
            resposta_menor = `${valor2} é o menor valor`;
        } else {
            resposta_menor = `${valor1} é o menor valor`;
        }
        
        resultado.textContent = `${resposta_maior}, enquanto o ${resposta_menor}.`

    } else if ((valor1 > valor) && (valor1 > valor2)) {
        resposta_maior = `O ${valor1} é o número de maior valor`;
        if (valor >= valor2) {
            resposta_menor = `${valor2} é o menor valor`;
        } else {
            resposta_menor = `${valor} é o menor valor`;
        }
        
        resultado.textContent = `${resposta_maior}, enquanto o ${resposta_menor}.`

    } else if ((valor2 > valor) && (valor2 > valor1)) {
        resposta_maior = `O ${valor2} é o número de maior valor`;
        if (valor >= valor1) {
            resposta_menor = `${valor1} é o menor valor`;
        } else {
            resposta_menor = `${valor} é o menor valor`;
        }

        resultado.textContent = `${resposta_maior}, enquanto o ${resposta_menor}.`

    } else {
        resultado.textContent = 'Todos os valores são iguais!';
    };
};

verificar.addEventListener('click', () => {

    let valor = parseInt(document.querySelector('#num0').value) || 0;
    let valor1 = parseInt(document.querySelector('#num1').value) || 0;
    let valor2 = parseInt(document.querySelector('#num2').value) || 0;

    verificar_maior_menor(valor, valor1, valor2);

});

// Atividade C

let velocidade = 0;

function radar(velocidade) {

    if (parseInt(velocidade) > 60){

        resultado.style.color = "#FF0000"
        resultado.textContent = 'Você está acima da velocidade permitida! Reduza a velocidade!';

    } else {

        resultado.textContent = 'Você está dentro do limite de velocidade! Boa viagem!';
    }
};

verificar.addEventListener('click', ()=> {
    let velocidade = document.querySelector('#velocidade').value;
    
    radar(velocidade || 0);
});

// Atividade D

function calcular_salario(valor) {
    let salario = parseInt(valor);
    if (salario <= 0){
        
        resultado.textContent = 'Valor inválido! Insira um valor superior a 0.';
        
    } else {
        
        if (salario < 1000) {
            let aumento10 = salario * 0.1;
    
            let aumento = salario + aumento10; 
    
            resultado.textContent = `O salário atual R$${salario.toFixed(2)} com aumento de: 
            R$${aumento10.toFixed(2)} será: R$${aumento.toFixed(2)}.`;
        } else if (salario > 1500) {
            let aumento5 = salario * 0.05;
    
            let aumento = salario + aumento5; 
    
            resultado.textContent = `O salário atual R$${salario.toFixed(2)} com aumento de: 
            R$${aumento5.toFixed(2)} será: R$${aumento.toFixed(2)}.`;

        } else {
            resultado.textContent = `O salário atual R$${salario.toFixed(2)} permanece inalterado.`;
        };

    };
};

verificar.addEventListener('click', ()=> {
    let salario = document.querySelector('#salario');

    let valor = salario.value;

    calcular_salario(valor || 0);
});

// Atividade E 

function calcular_passagem(valor){
    let distancia = parseInt(valor);

    if (valor <= 0) {

        resultado.textContent = 'Insira um valor superior a 0.';
    } else {

        let valor_passagem = 0;

        if (distancia <= 200) {

            let valor_passagem = distancia * 0.7;
            resultado.textContent = `o valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;

        } else {

            let valor_passagem = distancia * 0.4;
            resultado.textContent = `o valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;
        }
    };

};

verificar.addEventListener('click', ()=> {
    let distancia = document.querySelector('#distancia');

    let valor = distancia.value;

    calcular_passagem(valor || 0);
});