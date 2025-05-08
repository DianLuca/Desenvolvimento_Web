// Aguarda o carregamento completo do HTMl para rodar o script
document.addEventListener('DOMContentLoaded', function(){
    // Obtém a referência do elemento <ul> com id "listaBreakContinue"
    const ul = document.getElementById('listaBreakContinue');

    // Função para limpar o conteúdo 
    const limpar = () => ul.innerHTML = '';

    // Função que adiciona itens <li> com texto dentro da <ul>
    const add = texto => {
        // Cria um novo elemento 
        const li = document.createElement('li');
        // Define o texto do <li>
        li.textContent = texto;
        // Adiciona o <li> dentro da <ul>
        // Append: adiciona um elemento filho dentro de outro elemento HTML;
        ul.appendChild(li);
    };

    // Evento ao clicar no botão com id "btnBreak"
    document.getElementById('btnBreak').addEventListener('click', function() {
        limpar();

        // Loop de 1 a 50
        for (let i = 1; i <= 50; i++) {
            if (i % 13 == 0) {
                // Adiciona mensagem
                add(`Parou no ${i} (divisível por 13!)`);
                // Encerra o loop imediatamente
                break;
            }
            // Caso não seja divisível por 13, apenas adiciona o número da listagem
            add(i);
        }
    });

    document.getElementById('btnContinue').addEventListener('click', function() {
        limpar();

        // Loop de 1 a 5
        for (let i = 1; i <= 5; i++) {

            // Se o número for 3, pula a iteração atual (não adiciona)
            if (i == 3) continue;
            // Adiciona os números normalmente se não for 3
            add(i);
        }
    });
})
