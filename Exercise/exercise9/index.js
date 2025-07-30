let random = Math.random();
let a = prompt("Enter first number");
let c = prompt("Enter operator");
let b = prompt("Enter second number ");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if (random > 0.1) {
    //correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    //wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}
