var Usuario = {
 nombre_Completo:"",
 nombre_de_usuario:"",
 contraseña:"",
 correo_electrónico:"",
 nacionalidad:"",
 Tipo_de_subcripcion:"",
 genero:"",
 celular:"",
 telefono:"",
 tipo_pago:"",
 ciudad_residencia:"",
 fecha_nacimiento:"",
 descripcion:"",
}
document.getElementById('submit').addEventListener("click", function(){
Usuario.nombreCompleto = document.getElementsByClassName('nombre')[0].value;

console.log(Usuario.nombreCompleto);
})
