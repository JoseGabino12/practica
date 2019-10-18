
var btn1 = document.querySelector('#btnUno')
var btn2 = document.querySelector('#btnDos')
var btn3 = document.querySelector('#btnXY')



btn1.addEventListener('click', ()=>{
    let i = 0
    while (i < 10) {
        console.log(i)
        i++
    }
})
/*
btn5.addEventListener('click', () =>{
    let i = 0
    let listas = document.querySelector('#opcion')
    let nuevoItem = document.createElement('option')
    while (i < 10) {
        let nuevoItem = document.createElement('option')
        nuevoItem.textContent = i
        listas.appendChild(nuevoItem)
        i++
    }
})
*/
btn3.addEventListener('click', () => {
    let i = 0
    let nombre1 = document.getElementById('nombre1').value
    let listas = document.querySelector('#lista')


    while (i < nombre1) {
        let numeros = prompt('Ingresa los numeros')
        let nuevoItem = document.createElement('li')

        nuevoItem.textContent = numeros
        listas.appendChild(nuevoItem)
        i++

    }
})