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