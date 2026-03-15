let price = 1000;

let quantities = document.querySelectorAll(".qty");
let totals = document.querySelectorAll(".total");

for(let i = 0; i < quantities.length; i++){

quantities[i].addEventListener("input", function(){

let q = quantities[i].value;

if(q < 0){
alert("Quantity cannot be negative");
quantities[i].value = 0;
q = 0;
}

let result = price * q;

totals[i].value = result;

if(result > 1000){
alert("You are eligible for gift coupon");
}

});

}