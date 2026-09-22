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

const isLoggedIn = true; 
const role = "admin";
if (isLoggedIn === true) {
   // you can write !== to say its not true 
   if (role === "admin") {
      console.log("Mod status");
   } else {
      console.log("cannot remove posts");
   }
}