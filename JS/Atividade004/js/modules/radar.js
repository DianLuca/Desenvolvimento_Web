import { validarEntrada } from "../utils/utils.js";

export function verificarVelocidade() {
    let velocidade = validarEntrada(document.querySelector('#velocidade').value);
    let resultado = document.querySelector('.resultado');

    if (velocidade !== null) {
        if (velocidade > 60){
    
            resultado.style.color = "#FF0000"
            resultado.textContent = 'Você está acima da velocidade permitida! Reduza a velocidade!';
    
        } else {
            resultado.style.color = "#000000"
            resultado.textContent = 'Você está dentro do limite de velocidade! Boa viagem!';
        }
    }
}