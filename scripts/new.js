// let person = prompt("Enter Your Name Here");
// alert("Hi "+person+" Welcome!");

// let num1 = parseInt(prompt("Enter a number"));
// let num2 = parseInt(prompt("Enter another number"));
// let sum = num1+num2;
// let sub = num1-num2;
// let mul = num1*num2;
// let division = num1/num2;
// let mod = num1&num2;
// alert(`Sum of ${num1} and ${num2} is ${sum}`);
// alert( `substract of ${num1} and ${num2} is ${sub}`);
// alert( `multiplication of ${num1} and ${num2} is ${mul}`);
// alert(`division of ${num1} and ${num2} is ${division}` );
// alert(`modulos of ${num1} and ${num2} is ${mod}` );


const numArr = [9,4,8,6,3,10,12];

const graterThen5 = numArr.filter(key => key%2!=0);
console.log(graterThen5);

const into4 = numArr.map(each => each*4);
console.log(into4);

const plus = numArr.reduce((prev,curr)=>prev+curr,0);
console.log(plus);

