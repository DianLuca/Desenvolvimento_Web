const produto = [
    {nome: 'Sabonete Natural', categoria: 'cosmetico', valor: 15.00},
    {nome: 'Shampoo Orgânico', categoria: 'cosmetico', valor: 25.00},
    {nome: 'Granola Artesanal', categoria: 'alimento', valor: 18.50},
    {nome: 'Mel Puro', categoria: 'alimento', valor: 22.00}
    
];

const resposta = document.querySelector('#resultado');
const mostrarItem = document.querySelector('#todos-produtos');

const limpar = () => mostrarItem.textContent = '';

function apresentarItem (nome, valor) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.innerHTML = nome;
    p.innerHTML = `R$ ${valor.toFixed(2)}`;

    div.appendChild(h2);
    div.appendChild(p);

    mostrarItem.appendChild(div);
};

// apresentarItem(produto[0].nome, produto[0].valor);

document.addEventListener('input', () => {

    const categoriaItem = document.querySelector('#categoria').value;
    
    const filtrar = produto.filter((categoria) => {
            return categoria.categoria === categoriaItem;
    });

    limpar();
    filtrar.categoria 
    filtrar.forEach((produto) => {
        apresentarItem(produto.nome, produto.valor);
    })

});

let valorTotal = 0;

const produtos = produto.forEach((produto) => {
    const nome = produto.nome;
    const valor = produto.valor;
    valorTotal += produto.valor;

    apresentarItem(nome, valor);
    resposta.textContent = `Valor Total dos itens: R$ ${valorTotal.toFixed(2)}`;
});