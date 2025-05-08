// Aguarda o carregamento completo do HTMl para rodar o script
document.addEventListener('DOMContentLoaded', function(){

    // Obtém a informação de cada um dos elementos
    const btn = document.querySelector('#btnMostrarDia');

    const entrada = document.querySelector('#numeroDia');

    const resposta = document.querySelector('#respostaDia');

    // Para começar com um valor padrão fora do HTML
    resposta.textContent = 'Dia da semana!'

    btn.addEventListener('click', function(){
        // Casting para converter o valor inserido (string) para número
        const numero = parseInt(entrada.value);
        
        // Verifica o valor da variável "numero" e exibe a resposta.
        switch (numero) {
            case 1:
                resposta.textContent = 'Dia da semana: Domingo.';
                break;
            case 2:
                resposta.textContent = 'Dia da semana: Segunda-Feira.';
                break;
            case 3:
                resposta.textContent = 'Dia da semana: Terça-Feira.';
                break;
            case 4:
                resposta.textContent = 'Dia da semana: Quarta-Feira.';
                break;
            case 5:
                resposta.textContent = 'Dia da semana: Quinta-Feira.';
                break;
            case 6:
                resposta.textContent = 'Dia da semana: Sexta-Feira.';
                break;
            case 7:
                resposta.textContent = 'Dia da semana: Sábado.';
                break;
            default:
                resposta.textContent = 'Número inválido!'
        }
    })

})
