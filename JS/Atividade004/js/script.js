// Variavéis globais

const btnParImpar = document.querySelector('#verificar');
const btnMaiorMenor = document.querySelector('#verificar');
const btnVelocidade = document.querySelector('#verificar');
// const verificar = document.querySelector('#verificar');
// const verificar = document.querySelector('#verificar');
// const verificar = document.querySelector('#verificar');
// const verificar = document.querySelector('#verificar');
// const verificar = document.querySelector('#verificar');
const resultado = document.querySelector('.resultado');

// Atividade A


function par_impar() {
    let valor = document.querySelector('#numero').value;

    if (valor % 2 == 0) {
        resultado.textContent = 'Este é um número par.';
    } else {
        resultado.textContent = 'Este é um número ímpar.';
    };
};

btnParImpar.addEventListener('click', ()=> {

    par_impar();

});

// Atividade B

function verificar_maior_menor (){
    let valor = parseInt(document.querySelector('#num0').value) || 0;
    let valor1 = parseInt(document.querySelector('#num1').value) || 0;
    let valor2 = parseInt(document.querySelector('#num2').value) || 0;
    
    if (valor == valor1 && valor1 == valor2) {
        resultado.textContent = 'Todos os valores são iguais!';
    } else {
        const maior =  Math.max(valor, valor1, valor2);
        const menor = Math.min(valor, valor1, valor2);
        
        resultado.textContent = `O ${maior} é o número de maior valor, enquanto o ${menor} é menor valor.`;
    }
    
};

btnMaiorMenor.addEventListener('click', () => {

    verificar_maior_menor();

});

// Atividade C

let velocidade = 0;

function radar() {
    let velocidade = document.querySelector('#velocidade').value;

    if (parseInt(velocidade) > 60){

        resultado.style.color = "#FF0000"
        resultado.textContent = 'Você está acima da velocidade permitida! Reduza a velocidade!';

    } else {
        resultado.style.color = "#000000"
        resultado.textContent = 'Você está dentro do limite de velocidade! Boa viagem!';
    }
};

btnVelocidade.addEventListener('click', ()=> {
    
    radar();
    
});

// // Atividade D

// function calcular_salario(valor) {
//     let salario = parseInt(valor);
//     if (salario <= 0){
        
//         resultado.textContent = 'Valor inválido! Insira um valor superior a 0.';
        
//     } else {
        
//         if (salario < 1000) {
//             let aumento10 = salario * 0.1;
    
//             let aumento = salario + aumento10; 
    
//             resultado.textContent = `O salário atual R$${salario.toFixed(2)} com aumento de: 
//             R$${aumento10.toFixed(2)} será: R$${aumento.toFixed(2)}.`;
//         } else if (salario > 1500) {
//             let aumento5 = salario * 0.05;
    
//             let aumento = salario + aumento5; 
    
//             resultado.textContent = `O salário atual R$${salario.toFixed(2)} com aumento de: 
//             R$${aumento5.toFixed(2)} será: R$${aumento.toFixed(2)}.`;

//         } else {
//             resultado.textContent = `O salário atual R$${salario.toFixed(2)} permanece inalterado.`;
//         };

//     };
// };

// verificar.addEventListener('click', ()=> {
//     let salario = document.querySelector('#salario');

//     let valor = salario.value;

//     calcular_salario(valor || 0);
// });

// // Atividade E 

// function calcular_passagem(valor){
//     let distancia = parseInt(valor);

//     if (valor <= 0) {

//         resultado.textContent = 'Insira um valor superior a 0.';
//     } else {

//         let valor_passagem = 0;

//         if (distancia <= 200) {

//             let valor_passagem = distancia * 0.7;
//             resultado.textContent = `o valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;

//         } else {

//             let valor_passagem = distancia * 0.4;
//             resultado.textContent = `o valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;
//         }
//     };

// };

// verificar.addEventListener('click', ()=> {
//     let distancia = document.querySelector('#distancia');

//     let valor = distancia.value;

//     calcular_passagem(valor || 0);
// });

// // Atividade F

// function verificar_bissexto(valor) {
//     if (valor <= 0) {
//         resultado.textContent = 'Insira um valor maior que 0.'
//     } else {
//         if ((valor % 4 == 0) && (valor % 100 != 0) || (valor % 400 == 0)){
//             resultado.textContent = `O ano ${valor} é um ano bissexto!`
//         } else {
//             resultado.textContent = `O ano ${valor} não é um ano bissexto!`
//         }
//     }
// };

// verificar.addEventListener('click', () => {
//     let ano = document.querySelector('#ano');

//     let valor = parseInt(ano.value) || 1;

//     verificar_bissexto(valor);
// });

// // Atividade G 

// function verificar_triangulo(valor, valor1, valor2) {
//     if (valor <= 0 && valor1 <= 0 && valor2 <= 0) {
//         resultado.textContent = 'Insira um valor maior que 0.';
//     } else {

//         if ((valor <= 0) || (valor1 <= 0) || (valor2 <= 0)) {
//             resultado.textContent = `A soma dos segmentos: ${valor}, ${valor1} e ${valor2} não pode ser um triângulo.`;
//         } else if ((valor < (valor1 + valor2)) && (valor1 < (valor + valor2)) && (valor2 < (valor1 + valor))){
//             resultado.textContent = `A soma dos segmentos: ${valor}, ${valor1} e ${valor2} pode ser um triângulo.`;
//         } else {
//             resultado.textContent = `A soma dos segmentos: ${valor}, ${valor1} e ${valor2} não pode ser um triângulo.`;
//         };
        
//     };
// };

// verificar.addEventListener('click', () => {
//     let segmento = document.querySelector('#segmento');
//     let segmento1 = document.querySelector('#segmento1');
//     let segmento2 = document.querySelector('#segmento2');

//     let valor = parseInt(segmento.value) || 0;
//     let valor1 = parseInt(segmento1.value) || 0;
//     let valor2 = parseInt(segmento2.value) || 0;

//     verificar_triangulo(valor, valor1, valor2);
// });


// // Atividade H

// function resolver_raiz (valor, valor1, valor2) {
//     let delta = (valor1**2) - 4*valor*valor2;

//     let raiz_delta = delta ** (1/2);
//     // let raiz_delta = Math.sqrt(delta);

//     if (delta < 0) {

//         resultado.textContent = 'Não possuí uma raiz real.';

//     } else {
//         if (valor === 0){

//             resultado.textContent = `Não foi possível realizar a operação. O valor de 'a' não pode ser igual a 0!`;

//         } else {
            
//             let x1 = (-valor1 + raiz_delta)/(2*valor);
            
//             let x2 = (-valor1 - raiz_delta)/(2*valor);
            
//             resultado.textContent = `O valor das raízes será igual a: ${x1} e ${x2}.`;
//         }
//     };
// };

// verificar.addEventListener('click', () => {
//     let valorA = document.querySelector('#valorA');
//     let valorB = document.querySelector('#valorB');
//     let valorC = document.querySelector('#valorC');

//     let valor = parseInt(valorA.value) || 0;
//     let valor1 = parseInt(valorB.value) || 0;
//     let valor2 = parseInt(valorC.value) || 0;

//     resolver_raiz(valor, valor1, valor2);
// });