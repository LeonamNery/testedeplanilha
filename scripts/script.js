const dadosOriginais = [
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

let dadosVisiveis = [...dadosOriginais];
let ordemCrescente = true;

const tbody = document.getElementById("tabela-dados");

const inputNome = document.getElementById("search-nome");
const inputBairro = document.getElementById("search-bairro");
const inputValor = document.getElementById("search-valor");
const inputTipologia = document.getElementById("search-tipologia");

const btnLimpar = document.getElementById("limpar");
const btnOrdenar = document.getElementById("ordenar");

function valorNumerico(valor) {
  return Number(
    valor.replace("R$", "")
         .replace(/\./g, "")
         .replace(",", ".")
         .trim()
  );
}

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

function aplicarFiltros() {
  const nome = inputNome.value.toLowerCase();
  const bairro = inputBairro.value.toLowerCase();
  const valor = inputValor.value.toLowerCase();
  const tipologia = inputTipologia.value.toLowerCase();

  dadosVisiveis = dadosOriginais.filter(item =>
    (nome === "" || item.nome.toLowerCase().includes(nome)) &&
    (bairro === "" || item.bairro.toLowerCase().includes(bairro)) &&
    (valor === "" || item.valor.toLowerCase().includes(valor)) &&
    (tipologia === "" || item.tipologia.toLowerCase().includes(tipologia))
  );

  renderTabela(dadosVisiveis);
}

btnOrdenar.addEventListener("click", () => {
  dadosVisiveis.sort((a, b) => {
    const v1 = valorNumerico(a.valor);
    const v2 = valorNumerico(b.valor);
    return ordemCrescente ? v1 - v2 : v2 - v1;
  });

  ordemCrescente = !ordemCrescente;
  renderTabela(dadosVisiveis);
});

btnLimpar.addEventListener("click", () => {
  inputNome.value = "";
  inputBairro.value = "";
  inputValor.value = "";
  inputTipologia.value = "";

  dadosVisiveis = [...dadosOriginais];
  renderTabela(dadosVisiveis);
});

[inputNome, inputBairro, inputValor, inputTipologia]
  .forEach(input => input.addEventListener("input", aplicarFiltros));

// inicialização
renderTabela(dadosOriginais);
