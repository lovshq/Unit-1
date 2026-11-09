// project 


//kawasaki ninja zx - 6RR 
//supra mk3 , mazda mx-5 , bmw m2, bmw m3, toyota gr 86, nissan 350x , 720s spider
// 780s spider, Ninja h2r , bmw m8 , toyota ft1 , bmw z4 , bmw 1000 RR 

/* 
let array = [
{ name: "porsche 911 gt3rs" , price: 224000 },
{ name: "bmw m4g82" , price: 98000 },
{ name: "chevrolet corvette c8" , price: 122510 }, 
{ name: "porsche he 718 boxster" , price: 80000 }, 
{ name: "toyota supra v6" , price: 61450 }, 
{ name: "koenigsegg jesko absolut" , price: 5500000 },
{ name: "supra mk3" , price: 30000 }, 
{ name: "mclaren 720s spider" ,}

] */


/* console.log("test");

let x = document.querySelector
x.style.backgroundColor = "red";
const header = document.querySelector;
header.style.backgroundColor = "blue" */

// header.textContent = "Hello World";


/* function getRGB(){
let r = Math.floor(Math.random() * 256); 
let g = Math.floor(Math.random() * 256); 
let b = Math.floor(Math.random() * 256); 
const box = document.querySelector(".box")
box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
header.textContent = `rgb(${r}, ${g}, ${b})`;
}

const header = document.getElementById("color");
let x = 0; 
document.getElementById("btn").addEventListener("click", function(){
   console.log("test");
   x++;
 getRGB();
}); */

/* function inject(){
const box = document.querySelector(".box");
box.style.backgroundColor 
const header = document.getElementById("color");
let x = 0; 
document.getElementById("btn").addEventListener("click", function(){
   console.log("clicked");
   x++;
)} */
function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach ((button) => 
   button.addEventListener("click", function (){
      console.log("clicked");
   }),
);
//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons