
let listaAmigos=[];
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value 
    if (nombreAmigo=='') {
       alert("agrege un nombre");
    } else {
        listaAmigos.push(nombreAmigo);
        clear();
    }
    console.log(listaAmigos)
}
function clear() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}