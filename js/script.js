const localizacoes = ['Rua A', 'Rua B', 'Rua C', 'Rua D', 'Rua E']; // Array com nomes de ruas
const lixeiras = []; // Array para armazenar as lixeiras

// Popula o seletor de localizações com nomes de ruas
const localizacaoSelect = document.getElementById('localizacao');
for (let i = 0; i < localizacoes.length; i++) {
  const option = document.createElement('option');
  option.value = localizacoes[i];
  option.textContent = localizacoes[i];
  localizacaoSelect.appendChild(option);
}

document.getElementById('lixeiraForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const localizacaoSelecionada = document.getElementById('localizacao').value;
  const estadoLixeira = document.getElementById('estadoLixeira').value;

  const lixeiraData = {
    localizacao: localizacaoSelecionada,
    estado: estadoLixeira
  };
});

function criarCaminho() {
  const caminhoCheia = [];
  const caminhoQuaseCheia = [];

  for (let i = 0; i < lixeiras.length; i++) {
    if (lixeiras[i].estado === 'cheia') {
      caminhoCheia.push(lixeiras[i].localizacao);
    } else if (lixeiras[i].estado === 'quaseCheia') {
      caminhoQuaseCheia.push(lixeiras[i].localizacao);
    }
  }
}

function exibirDadosLixeiras() {
  const estadoAtualLixeiras = document.getElementById('estadoAtualLixeiras');
  estadoAtualLixeiras.innerHTML = '';

  for (let i = 0; i < lixeiras.length; i++) {
    const lixeiraItem = document.createElement('li');
    lixeiraItem.textContent = `${lixeiras[i].localizacao}: ${lixeiras[i].estado}`;
    estadoAtualLixeiras.appendChild(lixeiraItem);
  }
}
document.getElementById('lixeiraForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const localizacaoSelecionada = document.getElementById('localizacao').value;
  const estadoLixeira = document.getElementById('estadoLixeira').value;

  const lixeiraData = {
    localizacao: localizacaoSelecionada,
    estado: estadoLixeira
  };

  lixeiras.push(lixeiraData); // Armazena a lixeira no array

  // Armazena os dados da lixeira em uma lista
  const estadoAtualLixeiras = document.getElementById('estadoAtualLixeiras');
  const lixeiraItem = document.createElement('li');
  lixeiraItem.textContent = `${lixeiraData.localizacao}: ${lixeiraData.estado}`;
  estadoAtualLixeiras.appendChild(lixeiraItem);

  // Limpa o formulário
  document.getElementById('localizacao').value = '';
  document.getElementById('estadoLixeira').value = '';

  criarCaminho();
  exibirDadosLixeiras();
});
const ruasNecessarias = [];

function verificarEstado(rua, estado) {
  const formularioLixeiras = document.getElementById('formularioLixeiras');

  // Remove a classe de rua-necessaria caso já tenha sido adicionada anteriormente
  if (ruasNecessarias.includes(rua)) {
    formularioLixeiras[rua].classList.remove('rua-necessaria');
    ruasNecessarias.splice(ruasNecessarias.indexOf(rua), 1);
  }

  if (estado === 'cheia' || estado === 'quaseCheia') {
    if (!ruasNecessarias.includes(rua)) {
      ruasNecessarias.push(rua);
      formularioLixeiras[rua].classList.add('rua-necessaria');
    }
  }
}

function exibirRuasNecessarias() {
  const ruasNecessariasElement = document.getElementById('ruasNecessarias');

  ruasNecessariasElement.textContent = '';

  if (ruasNecessarias.length > 0) {
    const mensagemRuasNecessarias = document.createElement('p');
    mensagemRuasNecessarias.textContent = 'Ruas necessárias:';
    ruasNecessariasElement.appendChild(mensagemRuasNecessarias);

    const listaRuasNecessarias = document.createElement('ul');

    for (const rua of ruasNecessarias) {
      const ruaItem = document.createElement('li');
      ruaItem.textContent = `Rua ${rua}`;
      listaRuasNecessarias.appendChild(ruaItem);
    }

    ruasNecessariasElement.appendChild(listaRuasNecessarias);
  }
}