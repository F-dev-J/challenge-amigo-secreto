
let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value
    if (nombreAmigo == '') {
        alert("agrege un nombre");
    } else {
        listaAmigos.push(nombreAmigo);
        clear();
        recorrido();
    }
    console.log(listaAmigos)
}
function clear() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}

function recorrido() {
    let ul = document.querySelector("#listaAmigos");
    ul.innerHTML = "";
    for (let index = 0; index < listaAmigos.length; index++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[index];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("no hay amigos para sortear");
        return
    }
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    console.log(amigoSorteado);
    let nombreSorteado = listaAmigos[amigoSorteado];
    let ul = document.querySelector("#listaAmigos");
    ul.innerHTML = "";
    let ul2 = document.querySelector("#resultado");
    ul2.innerHTML="";
    let li = document.createElement("li");
    li.textContent = `felicidades : ${nombreSorteado}`;
    ul2.appendChild(li);
}