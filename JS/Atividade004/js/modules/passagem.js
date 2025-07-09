import { validarEntrada } from "../utils/utils.js";

export function calcularPassagem(){

    let distancia = validarEntrada(document.querySelector('#distancia').value);
    let resultado = document.querySelector('.resultado');

    if (distancia !== null) {

        if (distancia <= 0) {
    
            resultado.textContent = 'Insira um valor superior a 0.';
        } else {
    
    
            if (distancia <= 200) {
    
                let valor_passagem = distancia * 0.7;
                resultado.textContent = `O valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;
    
            } else {
    
                let valor_passagem = distancia * 0.4;
                resultado.textContent = `O valor total da passagem será de R$${valor_passagem.toFixed(2)}.`;
            }
        };
    }

};