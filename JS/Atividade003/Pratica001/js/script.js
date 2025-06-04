const produto = [
    {nome: 'Sabonete Natural', categoria: 'cosmetico', valor: 15.00},
    {nome: 'Shampoo Orgânico', categoria: 'cosmetico', valor: 25.00},
    {nome: 'Granola Artesanal', categoria: 'alimento', valor: 18.50},
    {nome: 'Mel Puro', categoria: 'alimento', valor: 22.00}
    
];


const resposta = document.querySelector('#resultado');
const mostrarItem = document.querySelector('#todos-produtos');


function apresentarItem (nome, valor) {
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = nome;
    p.textContent = `R$ ${parseFloat(valor)}`;

    mostrarItem.appendChild(h2);
    mostrarItem.appendChild(p);

};

// apresentarItem(produto[0].nome, produto[0].valor);

document.addEventListener('input', () => {

    const categoriaItem = document.querySelector('#categoria').value;
    console.log(categoriaItem);

    
});

let valorTotal = 0;

const produtos = produto.map((produto) => {
    const nome = produto.nome;
    const valor = produto.valor;
    valorTotal += produto.valor;

    apresentarItem(nome, valor);
    resposta.textContent = `Valor Total dos itens: R$ ${valorTotal}`;
});

