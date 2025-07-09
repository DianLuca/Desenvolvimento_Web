import { validarEntrada } from "../utils/utils.js";

export function verificarParImpar() {
    let valor = validarEntrada(document.querySelector('#numero').value);
    let resultado = document.querySelector('.resultado');
    
    if (valor !== null) {
        resultado.textContent = `O número ${valor} é ${valor % 2 === 0 ? "par" : "ímpar"}!`;
        // if (valor % 2 == 0) {
        //     console.log('Está funcionando!')
        //     resultado.textContent = 'Este é um número par.';
        //     // exibirResultado('Este é um número par.');
        // } else {
        //     resultado.textContent = 'Este é um número ímpar.';
        //     // exibirResultado('Este é um número ímpar.');
        // };
    }

};