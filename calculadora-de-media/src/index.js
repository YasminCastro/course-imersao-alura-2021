var notas = 0;
// var n2 = 8;
// var n3 = 6;
// var n4 = 5;

// var nFinal = (n1 + n2 + n3 + n4) / 4;
// var notaFixada = nFinal.toFixed(1);
// var aprovado = ",você foi aprovada. Sua nota é: ";
// var reprovado = ",você foi reprovado. Sua nota é: ";
// if (nFinal > 6) {
//   console.log(nome + aprovado + nFinal);
//   document.body.innerHTML += nome + aprovado + nFinal;
// } else {
//   console.log((document.body.innerHTML += nome + reprovado + nFinal));
//   document.body.innerHTML += nome + reprovado + nFinal;
// }

//pega as notas inseridas

function calcularNota() {
  var nota1 = document.getElementsByName(nota1).value;
  var nota2 = document.getElementsByName(nota2).value;
  var resultado = document.getElementById(resultado);

  var notaFinal = (nota1 * nota2) / 2;
  console.log(notaFinal);
  rasultado.innerHTML = "Sua nota é" + notaFinal;
}

function adicionarCampoNotas() {
  var i = 2;

  document.getElementById(iptNota3).hidden = false;
}
