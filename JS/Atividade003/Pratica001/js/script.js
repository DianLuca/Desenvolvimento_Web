const produto = [
    {nome: 'Sabonete Natural', categoria: 'cosmetico', valor: 15.00},
    {nome: 'Shampoo Orgânico', categoria: 'cosmetico', valor: 25.00},
    {nome: 'Granola Artesanal', categoria: 'alimento', valor: 18.50},
    {nome: 'Mel Puro', categoria: 'alimento', valor: 22.00}
    
];

let valorTotal = 0;
const resposta = document.querySelector('#resultado');
const mostrarItem = document.querySelector('#todos-produtos');

const limpar = () => mostrarItem.textContent = '';

function apresentarItem (nome, valor, valorTotal) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.innerHTML = nome;
    p.innerHTML = `R$ ${valor.toFixed(2)}`;

    div.appendChild(h2);
    div.appendChild(p);

    mostrarItem.appendChild(div);
    resposta.textContent = `Valor Total dos itens: R$ ${valorTotal.toFixed(2)}.`;
};

document.addEventListener('change', () => {
    valorTotal = 0;
    const categoriaItem = document.querySelector('#categoria').value;
    
    if (categoriaItem == 'todos') {
        limpar()
        const produtos = produto.forEach((produto) => {
            const nome = produto.nome;
            const valor = produto.valor;
            valorTotal += produto.valor;
        
            apresentarItem(nome, valor, valorTotal);
        });
    } else {
        const filtrar = produto.filter((categoria) => {
                return categoria.categoria === categoriaItem;
        });
    
        limpar();

        filtrar.forEach((produto) => {
            valorTotal += produto.valor;
            apresentarItem(produto.nome, produto.valor, valorTotal);
        })
    };
});


produto.forEach((produto) => {
    valorTotal += produto.valor;
    apresentarItem(produto.nome, produto.valor, valorTotal);
})