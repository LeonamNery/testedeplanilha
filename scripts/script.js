const dadosOriginais = [
  { nome: "Aloha", bairro: "Barra da Tijuca", valor: "R$ 1.110.000", tipologia: "2qts" },
  { nome: "Alphagreen", bairro: "Barra da Tijuca", valor: "R$ 1.100.000", tipologia: "2qts" },
  { nome: "Barra Bali - Beach", bairro: "Barra da Tijuca", valor: "R$ 760.000", tipologia: "3qts" },
  { nome: "Barramares", bairro: "Barra da Tijuca", valor: "R$ 5.900.000", tipologia: "4qts" }
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
  return Number(valor.replace("R$", "").replace(/\./g, "").replace(",", "."));
}

function renderTabela(lista) {
  tbody.innerHTML = "";
  lista.forEach(i => {
    tbody.innerHTML += `
      <tr>
        <td>${i.nome}</td>
        <td>${i.bairro}</td>
        <td>${i.valor}</td>
        <td>${i.tipologia}</td>
      </tr>
    `;
  });
}

function aplicarFiltros() {
  dadosVisiveis = dadosOriginais.filter(i =>
    (!inputNome.value || i.nome.toLowerCase().includes(inputNome.value.toLowerCase())) &&
    (!inputBairro.value || i.bairro.toLowerCase().includes(inputBairro.value.toLowerCase())) &&
    (!inputValor.value || i.valor.toLowerCase().includes(inputValor.value.toLowerCase())) &&
    (!inputTipologia.value || i.tipologia.toLowerCase().includes(inputTipologia.value.toLowerCase()))
  );
  renderTabela(dadosVisiveis);
}

btnOrdenar.onclick = () => {
  dadosVisiveis.sort((a, b) =>
    ordemCrescente
      ? valorNumerico(a.valor) - valorNumerico(b.valor)
      : valorNumerico(b.valor) - valorNumerico(a.valor)
  );
  ordemCrescente = !ordemCrescente;
  renderTabela(dadosVisiveis);
};

btnLimpar.onclick = () => {
  inputNome.value = "";
  inputBairro.value = "";
  inputValor.value = "";
  inputTipologia.value = "";
  dadosVisiveis = [...dadosOriginais];
  renderTabela(dadosVisiveis);
};

[inputNome, inputBairro, inputValor, inputTipologia]
  .forEach(i => i.addEventListener("input", aplicarFiltros));

renderTabela(dadosOriginais);
