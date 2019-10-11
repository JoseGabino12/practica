var opcion = document.querySelector('#btnOpcion')
var lista = document.querySelector('#btnLista')
var tabla = document.querySelector('#btnTabla')


lista.addEventListener('click', ()=>{
    let nombre = document.querySelector('#nombre').value
    let listas = document.querySelector('#lista')
    let nuevoItem = document.createElement('li')

    nuevoItem.textContent = nombre
    listas.appendChild(nuevoItem)

})

tabla.addEventListener('click', ()=>{
    let nombre = document.querySelector('#nombre').value
    let tablas = document.querySelector('#tabla')
    let nuevoRenglon = tabla.insertRow(-1)
    let col1 = nuevoRenglon.insertCell(0)

    col1.textContent = nombre

})