var IVA = 0.16
var Pedido = {
  cliente: "Federico Gutierrez",
  productos: ["Manzanas", "Refrescos", "Azucar", "Sal", "Lechugas frescas"],
  precios: [500, 4000, 2500, 2000, 5000],
  cantidad: [20, 10, 3, 3, 10]
}

var resultado = 0
var premio = ""
var valorTotal = 0
// Algoritmo de calculo
for (var i in Pedido.precios) {
  resultado=resultado+ Pedido.precios[i]*Pedido.cantidad[i];
  valorTotal=resultado+resultado*IVA;
}
if(valorTotal>100000){
  premio="si";
}
else {
  premio="no";
}
var button = document.getElementById('calculo')
button.addEventListener('click', function(){

  // Aqui debes poner tu alerta
  alert(Pedido.cliente+"\n"+"Valor sin IVA = " + resultado+"\n"+"valorTotal = "+valorTotal+"\n"+"Premio= "+premio);

})
