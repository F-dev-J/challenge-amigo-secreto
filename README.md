# Challenger Amigo Secreto
 Se trata de una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

 El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

 A continuacion se muestran las funciones que utilice para realizar esta aplicacion:
## **function agregarAmigo**
```javascript
    function agregarAmigo() {
        let nombreAmigo = document.getElementById("amigo").value
        if (nombreAmigo == '') {
            alert("agrege un nombre");
        } else {``
            listaAmigos.push(nombreAmigo);
            clear();
            recorrido();
        }
        console.log(listaAmigos)
    }
```
 La variable **nombreAmigo** toma el nombre agregado por el usuario, luego del filtro se agregar ese nombre al array** listaAmigos[] **, luego de esto se limpia el campo con la funcion **clear** y se coloca el nombre del amigo en pantalla a traves de la funcion **recorrido**.
 Esto se realizara solo si** nombreAmigo≠∅**.
## function clear
```javascript
function clear() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}
```
 Una vez agregado el nombre, se limpia el campo para poder ser utilzado nuevamente.
## function recorrido
```javascript
function recorrido() {
    let ul = document.querySelector("#listaAmigos");
    ul.innerHTML = "";
    for (let index = 0; index < listaAmigos.length; index++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[index];
        ul.appendChild(li);
    }
}
```
 Esta funcion va colocando por pantalla los nombres que van siendo agregados, primero se vacia al elemento del DOM asigando una cadena vacia ("") usando la propiedad innerHTML del elemento.
 Luego se recorre a traves de un for el array listaAmigos[] y a cada elemento se los coloca dentro de una etiqueta "< li >" para mostrar los nombres uno abajo del otro sin que se borren por pantalla.
## function sortearAmigo
```javascript
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
```

Esta función selecciona un nombre aleatorio del arreglo listaAmigos y lo muestra en pantalla como el amigo sorteado. Primero verifica si la lista está vacía y, de ser así, muestra una alerta. Si hay nombres, elige uno al azar, limpia el contenido de las listas del DOM y crea un nuevo elemento < li > con el mensaje "felicidades : [nombre]", que luego se agrega a la lista de resultados.
