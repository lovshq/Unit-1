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
function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    ` <div class="card">
        <h2 class="card-name"></h2>
        <img 
        class="card-image"
        src="BMW M4.jpg"
        alt="BMW M4">
        <p class="desc">Grey, brand new,$5,000 discount</p>
        <p class="price">"card-price"</p>
        <button class="card-btn">Add To Cart</button>
      </div> `,
  );
const cars = document.querySelector(".container");
cars.forEach((button) =>
   button

);
};

//use for each to loop over array and run inject function inside foreach to put cards on screen
//uncomment code below to add event listener to the code
//create add to cart



/* const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach ((button) => 
   button.addEventListener("click", function (){
      console.log(event.target.closest(".card").getAttribute("data-item"));
      inject(button);
   }),
); */