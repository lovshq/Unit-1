let x = document.querySelector
x.style.backgroundColor = "red";
const header = document.querySelector;
header.style.backgroundColor = "blue"

// header.textContent = "Hello World";


function getRGB(){
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
}); 





let array = [
   {name: "BMW M4", price: 80000, image: "BMW M4"},
   {name: "Wine Red BMW M4", price: 80000, image: "red m4"},
   {name: "Porsche 911 Gt3RS", price: 20000, image: "hanging Porsche"},
   {name: "Porsche 918 Spyder", price: 5000000, image: "Porsche 918 Spyder"},
   {name: "Chevrolet Corvette c8", price: 120000, image: "Corvette C8 Stingray"},
   {name: "Toyota Supra MK4", price: 60000, image: "Toyota Supra MK4"}, 
   {name: "Koenigsegg Agera", price:2450000, image: "Koenigsegg Agera"},
   {name: "Mclaren 720s", price: 300000, image: "Mclaren 720s"},
   {name: "Bugatti Chiron", price: 5900000, image: "Buggati Chiron"},
   {name: "Corvette Stingray", price: 115000, image: "Corvette Stingray (C8)"}, 
   {name: "Yamaha R6", price: 17000, image: "Yamaha R6" },
   {name: "Yamaha R7", price: 9000, image: "Yamaha R7"},
   {name: "BMW S10000rr", price: 18000, image: "bmw s10000rr"},
   {name: "Ferrari 2012 California", price: 100000, image: "Ferrari California"},
   {name: "Ferrari SF90", price: 500000, image: "SF90"},
   {name: "Ferrari LaFerrari", price: 1500000, image: "download"},
   {name: "Lamborghini Revuelto", price: 670000, image: "Lamborghini Revuelto"},
   {name: "McLaren Senna", price: 3000000, image: "Mclaren Senna in Black"}, 
   {name: "McLaren 765LT", price: 800000, image: "McLaren 765LT"},
   {name: "Ferrari SF90 Stradale", price: 530000, image: "Ferrari SF90 Stradale"}
]

function inject() {
   for (let item of array) {
      const container = document.querySelector(".container");
      container.insertAdjacentHTML(
         "beforeend"
         `<div class="card">
        <h2>class="card-title"><($item.name)</h2>
        <img 
        class= $item.image
        src="BMW M4.jpg"
        alt=""
        <p class="desc">($item.description)</p>
        <p class="price">"item.price"</p>
        <button class="card-btn">Add To Cart</button>
      </div>`
      )
   }
}