import { validarEntrada } from "../utils/utils.js";

export function calcularSalario() {

    let salario = validarEntrada(document.querySelector('#salario').value);
    let resultado = document.querySelector('.resultado');
    
    if (salario !== null){
        
        salario = Number(salario); // convertendo o retorno para a função .toFixed funcionar corretamente.  

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
    }

};