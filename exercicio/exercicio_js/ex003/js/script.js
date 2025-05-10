document.addEventListener('DOMContentLoaded', function () {
    let texto = document.querySelector('#valor1');

    let resultado = document.querySelector('#resultado');
    
    // O evento input permite ver o número de caracteres em tempo real
    texto.addEventListener('input', function() {
        
        // Para pegar o que foi inserido(value) em ver o número de caracteres(length)
        numCaracteres = texto.value.length; 

        resultado.textContent = `O número de caracter(es) é de: ${numCaracteres}`;
    })

})