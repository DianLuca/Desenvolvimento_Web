document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#valor');

    let resultado = document.querySelector('#resultado');

    let verificado = 'Insira algo para verificar!';
    
    input.addEventListener('input', () => {

        const numCaracteres = input.value.length;
        const letrasMaiusculas = /[A-Z]/.test(input.value);
        const letrasMinusculas = /[a-z]/.test(input.value);
        const numeros = /[0-9]/.test(input.value);
        
        if ((numCaracteres >= 8) && letrasMaiusculas && letrasMinusculas && numeros) {
            verificado = 'Você possui uma senha forte.';
        } else {
            verificado = 'Você possui uma senha fraca.';
        }

        resultado.textContent = verificado;
    })
})