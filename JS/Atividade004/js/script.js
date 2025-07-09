// Variavéis globais

// const btnParImpar = document.querySelector('#verificar');
// const btnMaiorMenor = document.querySelector('#verificar');
// const btnVelocidade = document.querySelector('#verificar');
// const btnSalario = document.querySelector('#verificar');
// const btnPassagem = document.querySelector('#verificar');
// const btnAno = document.querySelector('#verificar');
// const btnTriangulo = document.querySelector('#verificar');
// const btnQuadratica = document.querySelector('#verificar');
// const resultado = document.querySelector('.resultado');

// function validarEntrada(valor) {

//     if (valor === null || valor.trim() === ''){
//         resultado.textContent = 'O campo não pode ser vazio.';
//         return null;
//     }

//     let numero = Number(valor);

//     if (isNaN(numero)) {
//         resultado.textContent = 'O campo deve conter apenas valores numéricos.';
//         return null;
//     }
    
//     return valor;
// }

// Atividade A

// function verificarParImpar() {
//     let valor = validarEntrada(document.querySelector('#numero').value);
    
//     if (valor !== null) {
//         if (valor % 2 == 0) {
//             resultado.textContent = 'Este é um número par.';
//         } else {
//             resultado.textContent = 'Este é um número ímpar.';
//         };
//     }
    
//     return;

// };

// btnParImpar.addEventListener('click', ()=> {

//     verificarParImpar();

// });

// // Atividade B

// function verificar_maior_menor (){
//     let valor = parseInt(document.querySelector('#num0').value);
//     let valor1 = parseInt(document.querySelector('#num1').value);
//     let valor2 = parseInt(document.querySelector('#num2').value);
    
//     if (valor == valor1 && valor1 == valor2) {
//         resultado.textContent = 'Todos os valores são iguais!';
//     } else {
//         const maior =  Math.max(valor, valor1, valor2);
//         const menor = Math.min(valor, valor1, valor2);
        
//         resultado.textContent = `O ${maior} é o número de maior valor, enquanto o ${menor} é menor valor.`;
//     }
    
// };

// btnMaiorMenor.addEventListener('click', () => {

//     verificar_maior_menor();

// });

// // Atividade C

// let velocidade = 0;

// function radar() {
//     let velocidade = document.querySelector('#velocidade').value;

//     if (parseInt(velocidade) > 60){

//         resultado.style.color = "#FF0000"
//         resultado.textContent = 'Você está acima da velocidade permitida! Reduza a velocidade!';

//     } else {
//         resultado.style.color = "#000000"
//         resultado.textContent = 'Você está dentro do limite de velocidade! Boa viagem!';
//     }
// };

// btnVelocidade.addEventListener('click', ()=> {
    
//     radar();
    
// });

// // // Atividade D

// function calcular_salario() {

//     let salario = document.querySelector('#salario').value;
    
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

// btnSalario.addEventListener('click', ()=> {

//     calcular_salario();
// });

// // // Atividade E 

// let valor_passagem = 0;

// function calcular_passagem(){

//     let distancia = document.querySelector('#distancia').value;

//     if (distancia <= 0) {

//         resultado.textContent = 'Insira um valor superior a 0.';
//     } else {


//         if (distancia <= 200) {

//             let valor_passagem = distancia * 0.7;
//             resultado.textContent = `o valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;

//         } else {

//             let valor_passagem = distancia * 0.4;
//             resultado.textContent = `o valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;
//         }
//     };

// };

// btnPassagem.addEventListener('click', ()=> {

//     calcular_passagem();

// });

// // // Atividade F

// function verificar_bissexto() {
//     let ano = document.querySelector('#ano').value;
    
    
//     if (ano <= 0) {
//         resultado.textContent = 'Insira um valor maior que 0.'
//     } else {
//         if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
//             resultado.textContent = `O ano ${ano} é um ano bissexto!`
//         } else {
//             resultado.textContent = `O ano ${ano} não é um ano bissexto!`
//         }
//     }
// };

// btnAno.addEventListener('click', () => {

//     verificar_bissexto();

// });

// // // Atividade G 

// function verificar_triangulo() {

//     let segmento = document.querySelector('#segmento').value;
//     let segmento1 = document.querySelector('#segmento1').value;
//     let segmento2 = document.querySelector('#segmento2').value;

//     if (segmento <= 0 && segmento1 <= 0 && segmento2 <= 0) {
//         resultado.textContent = 'Insira um valor maior que 0.';
//     } else {

//         if ((segmento <= 0) || (segmento1 <= 0) || (segmento2 <= 0)) {
//             resultado.textContent = `A soma dos segmentos: ${segmento}, ${segmento1} e ${segmento2} não pode ser um triângulo.`;
//         } else if ((segmento < (segmento1 + segmento2)) && (segmento1 < (segmento + segmento2)) && (segmento2 < (segmento1 + segmento))){
//             resultado.textContent = `A soma dos segmentos: ${segmento}, ${segmento1} e ${segmento2} pode ser um triângulo.`;
//         } else {
//             resultado.textContent = `A soma dos segmentos: ${segmento}, ${segmento1} e ${segmento2} não pode ser um triângulo.`;
//         };
        
//     };
// };

// verificar.addEventListener('click', () => {

//     verificar_triangulo();
// });


// // // Atividade H

// function resolver_raiz () {
//     let valorA = document.querySelector('#valorA').value;
//     let valorB = document.querySelector('#valorB').value;
//     let valorC = document.querySelector('#valorC').value;
    
//     let delta = (valorB**2) - 4*valorA*valorC;

//     let raiz_delta = delta ** (1/2);
//     // let raiz_delta = Math.sqrt(delta);

//     if (delta < 0) {

//         resultado.textContent = 'Não possuí uma raiz real.';

//     } else {
//         if (valorA === 0){

//             resultado.textContent = `Não foi possível realizar a operação. O valor de 'a' não pode ser igual a 0!`;

//         } else {
            
//             let x1 = (-valorB + raiz_delta)/(2*valorA);
            
//             let x2 = (-valorB - raiz_delta)/(2*valorA);
            
//             resultado.textContent = `O valor das raízes será igual a: ${x1} e ${x2}.`;
//         }
//     };
// };

// verificar.addEventListener('click', () => {
    
//     resolver_raiz();

// });