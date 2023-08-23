let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");

function add(){
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    let result = num1+ num2; 
    sumEl.textContent= " Sum : " + result;   
}

function subtract(){
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    let result = num1 - num2; 
    sumEl.textContent= " Sum : " + result;  
}

function divide(){
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    let result = num1 / num2; 
    sumEl.textContent= " Sum : " + result;  
}

function multiply(){
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    let result = num1*num2; 
    sumEl.textContent= " Sum : " + result; 
}