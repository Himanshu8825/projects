let plusButton = document.querySelector(".plusbtn");
let minusButton = document.querySelector(".minusbtn");
let resetButton = document.querySelector(".resetbtn");
let counter = 0 ;
let counterValue = document.querySelector("#counter");

plusButton.addEventListener("click", ()=>{
counter++;
counterValue.innerHTML = counter;
})

minusButton.addEventListener("click", ()=>{
counter--;
counterValue.innerHTML = counter;
})

resetButton.addEventListener("click", ()=>{
counter = 0;
counterValue.innerHTML = counter;
})