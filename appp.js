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
      console.log(event.target.closest(".card").getAttribute("data-item"));
   }),
);
// demo 