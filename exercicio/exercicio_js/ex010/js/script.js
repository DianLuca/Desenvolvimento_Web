document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#valor');

    let resultado = document.querySelector('#resultado');

    const numCaracteres = input.value.length;
    const letrasMaiusculas = /[A-Z]/.test(input.value);
    const letrasMinusculas = /[a-z]/.test(input.value);
    const numeros = /[0-9]/.test(input.value);

    input.addEventListener('input', () => {
        if (numCaracteres && letrasMaiusculas && letrasMinusculas && numeros) {
            resultado.textContent = 'Você possui uma senha forte.';
        } else {
            resultado.textContent = 'Você possui uma senha fraca.';
        }
    })
})