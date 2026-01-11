const dados = [
  {
    nome: "Aloha",
    bairro: "Barra da Tijuca",
    valor: "R$ 1.110.000",
    tipologia: "2qts"
  },
  {
    nome: "Alphagreen",
    bairro: "Barra da Tijuca",
    valor: "R$ 1.100.000",
    tipologia: "2qts"
  },
  {
    nome: "Barra Bali - Beach",
    bairro: "Barra da Tijuca",
    valor: "R$ 760.000",
    tipologia: "3qts"
  }
];

const tbody = document.getElementById("tabela-dados");

const inputNome = document.getElementById("search-nome");
const inputBairro = document.getElementById("search-bairro");
const inputValor = document.getElementById("search-valor");
const inputTipologia = document.getElementById("search-tipologia");

function renderTabela(lista) {
  tbody.innerHTML = "";

  lista.forEach(item => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.bairro}</td>
      <td>${item.valor}</td>
      <td>${item.tipologia}</td>
    `;

    tbody.appendChild(tr);
  });
}

function filtrar() {
  const nome = inputNome.value.toLowerCase();
  const bairro = inputBairro.value.toLowerCase();
  const valor = inputValor.value.toLowerCase();
  const tipologia = inputTipologia.value.toLowerCase();

  const filtrados = dados.filter(item =>
    (nome === "" || item.nome.toLowerCase().includes(nome)) &&
    (bairro === "" || item.bairro.toLowerCase().includes(bairro)) &&
    (valor === "" || item.valor.toLowerCase().includes(valor)) &&
    (tipologia === "" || item.tipologia.toLowerCase().includes(tipologia))
  );

  renderTabela(filtrados);
}

[inputNome, inputBairro, inputValor, inputTipologia]
  .forEach(input => input.addEventListener("input", filtrar));

// inicialização
renderTabela(dados);
