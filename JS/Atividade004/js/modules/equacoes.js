import { validarEntrada } from "../utils/utils.js";

export function calcularRaiz () {
    let valorA = validarEntrada(document.querySelector('#valorA').value);
    let valorB = validarEntrada(document.querySelector('#valorB').value);
    let valorC = validarEntrada(document.querySelector('#valorC').value);
    let resultado = document.querySelector('.resultado');
    
    if ((valorA && valorB && valorC) !== null) {

        valorA = Number(valorA);
        valorB = Number(valorB);
        valorC = Number(valorC);

        let delta = (valorB**2) - 4*valorA*valorC;
    
        let raiz_delta = delta ** (1/2);
        // let raiz_delta = Math.sqrt(delta);
    
        if (delta < 0) {
    
            resultado.textContent = 'Não possuí uma raiz real.';
    
        } else {
            if (valorA === 0){
    
                resultado.textContent = `Não foi possível realizar a operação. O valor de 'a' não pode ser igual a 0!`;
    
            } else {
                
                let x1 = (-valorB + raiz_delta)/(2*valorA);
                
                let x2 = (-valorB - raiz_delta)/(2*valorA);
                
                resultado.textContent = `O valor das raízes será igual a: ${x1} e ${x2}.`;
            }
        };
    }

};