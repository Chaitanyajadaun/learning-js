const prompt = require("prompt-sync")();

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    if (b===0) {
        return console.log ("Error: Division by zero")
        }
    return a/b
}
const a = Number(prompt("enter first number:"))
const b = Number(prompt("enter second number:"))
let operation = prompt("enter operation")

if (operation === "add") {
    console.log(`${a} + ${b} = ${add(a,b)}`)
}
else if (operation === "subtract"){
    console.log(`${a} - ${b} = ${subtract(a,b)}`)
}
else if (operation === "multiply"){
    console.log(`${a} * ${b} = ${multiply(a,b)}`)
}
else if (operation === "divide"){
    console.log( `${a} / ${b} = ${divide(a,b)}`)
}