import { validarEntrada } from "../utils/utils.js";

export function verificarMaiorMenor() {
    let valor = validarEntrada(document.querySelector('#num0').value);
    let valor1 = validarEntrada(document.querySelector('#num1').value);
    let valor2 = validarEntrada(document.querySelector('#num2').value);
    let resultado = document.querySelector('.resultado');
    
    if ((valor && valor1 && valor2) !== null){

        if (valor == valor1 && valor1 == valor2) {
            resultado.textContent = 'Todos os valores são iguais!';
        } else {
            const maior =  Math.max(valor, valor1, valor2);
            const menor = Math.min(valor, valor1, valor2);
            
            resultado.textContent = `O ${maior} é o número de maior valor, enquanto o ${menor} é menor valor.`;
        };
    }
}