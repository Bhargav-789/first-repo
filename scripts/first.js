// // mathmetical operators
// let x = 5;
// let y = 8;
// let addition = x+y
// let substraction = x-y
// let multiplcation = x*y
// let division = x/y
// let modulos  = x%y
// console.log(addition,substraction,multiplcation,division,modulos)
// // comparision operators
// let a = 8;
// let b = 10;
// console.log(a>b,a<b,a==b,a>=b,a<=b,a!=b)
// //logical operators
// //logical  And operator
// let age = 21;
// if(age>13 && age<=19){
//     console.log(`you are a "teenager".`)
// } else if(age>=20 && age<27){
//     console.log(`"you are an "adult"`)
// }else{console.log("you are not a teenager or adult")}
// // logical OR operator
// let num=8;
// let num1=10;
// console.log(num>num1 || num<num1)
// //logical not operator
// let three=3;
// let seven=7;
// console.log(!(three>seven && three<seven))
// //Ternary
// let result = (8<5) ?"True":"False";
// console.log(result)
// // incriment and decriment
// let N = 3;
// console.log(N++)//3
// console.log(++N)//5
// console.log(N--)//5
// console.log(++N)//5
// console.log(--N)//4
// console.log(N)//4

// //for loop
// //1 To 10 num
// let n=1;
// for(n=1; n<=10; n++){
//     console.log(n++)
// }
// //reverse 10 to 1 num
// let i=10;
// for(i=10; i>=1;i--){
//     console.log(i--)
// }

// //while loop
// let num3=1;
// while(num3<=10){
//     console.log(num3++);
// }
let num4=11
while(num4>=1){
    console.log(num4--);
}
// let g=11;
// do{
//     console.log(g++);
// }while(g<=20)

// //odd and even num count
// let numbers = 7;

// if(numbers % 2 == 0){
//     console.log("even number")
// }else{
//     console.log("odd number")
// }

// //for in loop
// let person ={
//     name: "bhargav",
//     age: 23,
//     position: "developer",

// }
// for(let key in person)
// {
//     console.log(key, person[key]);
 // }

//for of loop
// let data=[9,8,7,5,4,2,1]

// for(let n of data){
//     console.log(n,data[1])
// }

//for each loop
// let mul=[34,60,50,69]

// mul.forEach((n)=>{
//     console.log(n*2)
// });

// switch case

// let day=2;
// switch(day){
//     case 1:
//         console.log("day is monday");
//         break;
//         case 2:
//             console.log("day is tuesday");
//             break;
//             case 3:
//                 console.log("day is wednesday");
//                 break;
//                 case 4:
//                     console.log("day is thursdat");
//                     break;
//                     case 5:
//                         console.log("day is friday");
//                         break;
//                         case 6:
//                             console.log("day is saturday");
//                             break;
//                             case 7:
//                                 console.log("day is sunday");
//                                 default:
//                                     console.log("invalid")
// }


const R= Math.random(6);
console.log(R);

let today = new Date();
console.log(today);
 let dd = today.getDate();
 console.log(dd)