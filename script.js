const dados = [
    {
        nome: "Aloha",
        bairro: "Barra da Tijuca",
        valor: "R$ 1.110.000",
        tipologia: "2 quartos"
    },
    {
        nome: "Alphagreen",
        bairro: "Barra da Tijuca",
        valor: "R$ 1.100.000",
        tipologia: "2 quartos"
    },
    {
        nome: "Barra Bali - Beach",
        bairro: "Barra da Tijuca",
        valor: "R$ 760.000",
        tipologia: "3 quartos"
    },
    {
        nome: "Park Premium",
        bairro: "Recreio",
        valor: "R$ 690.000",
        tipologia: "2 quartos"
    }
];

const tbody = document.getElementById("tabela-dados");
const filtro = document.getElementById("filtro");

function renderTabela(lista) {
    tbody.innerHTML = "";

    lista.forEach((item, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.nome}</td>
            <td>${item.bairro}</td>
            <td>${item.valor}</td>
            <td>${item.tipologia}</td>
        `;

        tbody.appendChild(tr);
    });
}

filtro.addEventListener("input", () => {
    const texto = filtro.value.toLowerCase();

    const filtrados = dados.filter(item =>
        item.nome.toLowerCase().includes(texto) ||
        item.bairro.toLowerCase().includes(texto) ||
        item.tipologia.toLowerCase().includes(texto)
    );

    renderTabela(filtrados);
});

// Inicializa tabela
renderTabela(dados);
