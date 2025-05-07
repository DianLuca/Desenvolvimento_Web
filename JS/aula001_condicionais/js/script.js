document.addEventListener('DOMContentLoaded', function(){

    // Obtém a referência ao botão com id "btnVerficar"
    const btn = document.getElementById('btnVerificar');
    
    const input = document.getElementById('idade');

    const resultado = document.getElementById('resultado');

    // Adiciona um ouvinte para reagir com o botão
    btn.addEventListener('click', function(){

        const idade = parseInt(input.value);

        if (idade < 18 || idade == ''){
            resultado.textContent = 'Menor de idade!';
        } else if (idade == 18) {
            resultado.textContent = 'Tem exatamente 18 anos!';
        } else {
            resultado.textContent = 'Maior de idade!';
        }
    })
})