let button1 = document.querySelector('#leftButton');
let button2 = document.querySelector('#rightButton');
let p1value = document.querySelector('#random1');
let p2value = document.querySelector('#random2');

function generateRandom() {
    let randomNumber = Math.floor(Math.random()*100); 
    return randomNumber;
}

button1.addEventListener('click', () =>{
    p1value.innerText = generateRandom();

});

button2.addEventListener('click', () =>{
    p2value.innerText = generateRandom();
});

let p1Arr = [];
let p2Arr = [];

function sum(){
    let sum = 0;
    for(let i=0; i<=5; i++){
        sum+= sum[i]
    }
}