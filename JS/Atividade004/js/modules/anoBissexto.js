import { validarEntrada } from "../utils/utils.js";

export function verificarBissexto() {
    let ano = validarEntrada(document.querySelector('#ano').value);
    let resultado = document.querySelector('.resultado');
    
    if (ano !== null) {

        if (ano <= 0) {
            resultado.textContent = 'Insira um valor maior que 0.'
        } else {
            if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
                resultado.textContent = `O ano ${ano} é um ano bissexto!`
            } else {
                resultado.textContent = `O ano ${ano} não é um ano bissexto!`
            }
        }
    }
};