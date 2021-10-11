var aatrox = {
  nome: "Aatrox",
  foto: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/cc/AatroxSquare.png",
  informacoes: { Funcao: "Lutador", Cidade: "Runeterra", Lane: "Top" },
};

var ahri = {
  nome: "Ahri",
  foto: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/18/AhriSquare.png",
  informacoes: { Funcao: "Mago", Cidade: "Ionia", Lane: "Mid" },
};

var akali = {
  nome: "Akali",
  foto: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a5/AkaliSquare.png",
  informacoes: { Funcao: "Assassino", Cidade: "Ionia", Lane: "Mid" },
};

var akshan = {
  nome: "Akshan",
  foto: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3b/AkshanSquare.png",
  informacoes: { Funcao: "Atirador", Cidade: "Shurima", Lane: "ADC" },
};

var alistar = {
  nome: "Alistar",
  foto: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/34/AlistarSquare.png",
  informacoes: { Funcao: "Tanque", Cidade: "Runeterra", Lane: "Sup" },
};

var listaCampeoes = [aatrox, ahri, akali, akshan, alistar];

function jogar(campeao) {
  // sorteia um numero do array
  var numeroAleatorio = parseInt(Math.random() * listaCampeoes.length);
  var campeao = 0;

  campeao = listaCampeoes[numeroAleatorio];
  listaCampeoes.splice(numeroAleatorio, 1);

  //desabilita botão
  document.getElementById("btnSortear").disabled = false;

  //chama função para exibir o campeão
  exibeCampeao(campeao);
}

function exibeCampeao(campeao) {
  var exibeCampeao = document.getElementById("campeoes");
  //nome do campeão em exibição
  var nomeElemento = `<h3 class="campeao-nome">${campeao.nome}</h3>`;
  var opcoesTexto = "";

  //foto do campeão em exibição
  exibeCampeao.style.backgroundImage = `url(${campeao.foto})`;

  //enquanto houver informações dentro da array, imprima as opções na tela
  for (var informacao in campeao.informacoes) {
    opcoesTexto +=
      informacao +
      "<input type='text' class='information' name='informacoes' " +
      informacao +
      "'>" +
      "<br>";
  }

  var html = "<div id='opcoes' class='campeoes-status'>";
  console.log(exibeCampeao);

  exibeCampeao.innerHTML = nomeElemento + html + opcoesTexto + "</div>";
}
