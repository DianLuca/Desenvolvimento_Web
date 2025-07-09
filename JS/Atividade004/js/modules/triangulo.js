import { validarEntrada } from "../utils/utils.js";

export function verificarTriangulo() {

    let segmento = validarEntrada(document.querySelector('#segmento').value);
    let segmento1 = validarEntrada(document.querySelector('#segmento1').value);
    let segmento2 = validarEntrada(document.querySelector('#segmento2').value);
    let resultado = document.querySelector('.resultado');

    if ((segmento && segmento1 && segmento2) !== null) {

        segmento = Number(segmento);
        segmento1 = Number(segmento1);
        segmento2 = Number(segmento2);
        
        if (segmento <= 0 && segmento1 <= 0 && segmento2 <= 0) {
            resultado.textContent = 'Insira um valor maior que 0.';
        } else {
    
            if ((segmento <= 0) || (segmento1 <= 0) || (segmento2 <= 0)) {
                resultado.textContent = `A soma dos segmentos: ${segmento}, ${segmento1} e ${segmento2} não pode ser um triângulo.`;
            } else if ((segmento < (segmento1 + segmento2)) && (segmento1 < (segmento + segmento2)) && (segmento2 < (segmento1 + segmento))){
                resultado.textContent = `A soma dos segmentos: ${segmento}, ${segmento1} e ${segmento2} pode ser um triângulo.`;
            } else {
                resultado.textContent = `A soma dos segmentos: ${segmento}, ${segmento1} e ${segmento2} não pode ser um triângulo.`;
            };
            
        };
    }
};