//functions

function printMessage(message){
    console.log(message);
}

//sum
function sum(x,y){
    let sumofNum= x+y;
    return sumofNum;
}

let result = sum(5,3);

//substraction
function substraction(x,y){
    let substractionofNum = x-y;
    return substractionofNum;
}

let result1 = substraction(9,8);

//multiplication
function mul(x,y){
    let multiplicationofNum = x*y;
    return multiplicationofNum;
}

let result2 = mul(5,5);

//division
function division(x,y){
    let division0fNum = x/y;
    return division0fNum;
}

let result3 = division(8,4);

//modulo
function modulo(x,y){
    let moduloofNum = x%y;
    return moduloofNum;
}

let result4 = modulo(10,6);
//printMessages
printMessage(result);
printMessage(result1);
printMessage(result2);
printMessage(result3);
printMessage(result4);


function greet(user){
    return `hello ${user}!!`
}

 let user = "bhargav mandapaka";
 let string = greet(user);
 console.log(string);

 function greet1(firstName,Lastname){
    console.log(`Welcome ${firstName} ${Lastname}`);
 }

 greet1("bhargav","Mandapaka");


// function printMessage(message){
//     console.log(message);
// }

 function add(x,y){
    return  x+y;
 }

//  let sum=add1;
 let result5 = add(8,20);
//  console.log(result);
printMessage(result5);

//function slice split concatination

function captalize(word){
  let lowerWord = word.toLowerCase();
  return lowerWord[0].toUpperCase()+lowerWord.slice(1);
}

let greetings = "hi welocome to our organization";

greetings.split(" ").forEach(word => console.log(captalize(word)));

let nameb = "bhargav mandapaka"
 console.log(captalize(nameb));