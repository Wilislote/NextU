var calendario = document.getElementById('calendario');
calendario.addEventListener("click",function function(event) {
  var mensaje = "Hiciste click en la posición X: "+event.clientX+" Y: "+event.clientY;
  console.log(mensaje);
})
