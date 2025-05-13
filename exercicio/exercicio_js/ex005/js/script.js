document.addEventListener('DOMContentLoaded', function () {
    let texto = document.querySelector('#texto');

    const inserir = document.querySelector('#inserir');

    let resultado = document.querySelector('#resultado');

    // Criando a lista
    const ul = document.createElement('ul');
    
    resultado.appendChild(ul);
    
    // Criando cada item da lista
    const addItem = texto => {
        const li = document.createElement('li');
        
        li.textContent = texto;

        ul.appendChild(li);

    }

    inserir.addEventListener('click', () => {

        if (texto.value != '') {
            let textoInserido = texto.value;
    
            addItem(textoInserido);
        } else {
            alert('Insira um texto para adicionar uma tarefa!');
        }
    });

})