/* let x = 5:
//let can change 
x = 9; 
const y = 10; 
// const cannot change , use const 99% of the time 
console.log(x);
//  */


/* // strings 
let a = "ABC"; 
const myName = "Kimberley"; 
let b = `my name is ${myName}`;
//template literals are like F strings in Python and allow us to insert variables into Strings 
console.log(b);

// intrgers 
const c = 74; 

//booleans 
let f = false; 
let m = null ; 
//null is absence of value 
/* const y;  */ 
//undefined has no value unintentionally 
// shift alt a to block a code or write a note/comment  */
/* function add (x,y){
   return x + y;
}
let x = add(5,15);
console.log(x);
//abstraction, taking code and saving it for reusability and readability 
 */
/* const age = 19;
if (age > 65)
{
   console.log("Adult");
} else { 
   console.log("Child")
} */

/* const isLoggedIn = true; 
const role = "admin";
if (isLoggedIn === true) {
   // you can write !== to say its not true 
   if (role === "admin") {
      console.log("Mod status");
   } else {
      console.log("cannot remove posts");
   }
} */
/* let age =35;
let  citizen = true; 
if (age >= 35 && citizen === true){
   console.log("Run for President");
}

if (havekey || isMagic){
   console.log("open door");
} */






// Problem 1 Booleans 

function classifyNumber(num) {
  if (num === 0) {
   return("zero")
  } else if (num > 0 && num % 2 === 0) {
   return("positive even")
  } else if (num > 0 && num % 2 !== 0) {
    return("positive odd")
  } else if (num < 0 && num % 2 === 0) {
    return("negative even")
  } else if (num < 0 && num % 2 !== 0){
    return("negative odd")
  }

}

console.log(classifyNumber(0)); // "zero"
console.log(classifyNumber(4)); // "positive even"
console.log(classifyNumber(7)); // "positive odd"
console.log(classifyNumber(-4)); // "negative even"
console.log(classifyNumber(-7)); // "negative odd"


/* let x = 100; 
//for (let i = o;i < 4; i++){
//  x = x - i; 
// } 
   /* console.log(x); */
/* 
while (x > 0) {
   x = x - 10; 
   console.log(x);
}

//  array

const students = ["Amelia", "Kim"]
students.push("Bella") // adds to the list 
console.log(students[students.length - 1]);

if (students.includes("Kim")) { 
   console.log("We found Kimberley?");
} 

for (let i = 0; i < students.length; i++){
   if(students[i]==="Kim"){
      console.log(students[i], "We have found Kimberley");
   }
}
   students.forEach((student)=> {
   if (student === "Kim"){
   console.log(student, "We have found Kimberley");
}

}
 */
/* Problem 1: Range Builder  */

function getNumbersInRange(start , end) {
   const result = []
   for(let i = start; i <= end; i++) {
   result.push(i) 
   }
console.log(result)
} 
getNumbersInRange(1, 5);  // [1, 2, 3, 4, 5]
getNumbersInRange(10, 10); // [10]
getNumbersInRange(3, 8);  // [3, 4, 5, 6, 7, 8]


// Problem 2: Sum a Range 

function sumRange(start, end) {
let total = 0 
for (let i = start; i <=end; i++) {
   total += i 
}
return(total)
}
console.log(sumRange(1,5)); 
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4
// Problem 3 Countdown 

function countdown(n) {
while (n > 0) { 
   console.log("countdown: " + n); 
   n--; 
}

}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdown(1)); // [1]
console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]