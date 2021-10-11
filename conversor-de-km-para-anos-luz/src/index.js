function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKM = parseFloat(valor);

  var valorEmAnosLuz = valorEmKM * 0.0000000000001057;
  console.log(valorEmAnosLuz);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "Serão necessários " + valorEmAnosLuz + " anos luz para chegar ao destino.";
  elementoValorConvertido.innerHTML = valorConvertido;
}
