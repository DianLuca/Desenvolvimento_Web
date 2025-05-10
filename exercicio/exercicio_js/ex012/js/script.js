document.addEventListener('DOMContentLoaded', function () {

    const iniciar = document.querySelector('#iniciar');

    let resultado = document.querySelector('#resultado');

    
    iniciar.addEventListener('click', function() {
        let i = 10;

        // Usar setInterval() reduzindo 1s (1000ms) para funcionar 
        // clearInterval() remove as informações do contador anterior
        const contadorRegressivo = setInterval(() => {
            resultado.textContent = i;
            i--;
            
            if (i < 0) {
                clearInterval(contadorRegressivo);
                resultado.textContent = 'Tempo esgotado!';
            }
        }, 1000);
    });

})