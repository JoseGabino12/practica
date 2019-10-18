
var btn1 = document.querySelector('#btnUno')
var btn2 = document.querySelector('#btnDos')
var btn3 = document.querySelector('#btnXY')



btn1.addEventListener('click', ()=>{
    let i
    for(i = 1; i < 10; i++){
        console.log(i)
    }
})

btn2.addEventListener('click', ()=>{
    let i
    for(i = 0; i <= 100; i = i + 5){ 
        console.log(i)
    }
})

btn3.addEventListener('click', ()=>{
    let numero1 = document.getElementById('nombre1').value
    let numero2 = document.getElementById('numero2').value

    for(i = numero1; i <= numero2; i = i++){ 
        console.log(i)
    }
})