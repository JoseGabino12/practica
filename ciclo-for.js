
var btn1 = document.querySelector('#btnUno')
var btn2 = document.querySelector('#btnDos')




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