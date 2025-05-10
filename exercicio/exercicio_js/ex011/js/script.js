document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#valor');

    const btn = document.querySelector('#resolver');

    let resultado = document.querySelector('#resultado');

    const limpar = () => ul.innerHTML = '';

    const ul = document.createElement('ul');

    resultado.appendChild(ul);

    const criandoItem = texto => {
        const li = document.createElement('li');

        li.textContent = texto;

        ul.appendChild(li);
    }

    btn.addEventListener('click', ()=> {

        let num = parseFloat(input.value);

        if (input.value == '') {
            limpar();

            criandoItem('Insira um valor para executar a operação!');

        } else {
            limpar();
            for(let i = 1; i <=10; i++){
        
                let mult = num * i;

                criandoItem(`${num} x ${i} = ${mult}`);
            };
        };

    })

})