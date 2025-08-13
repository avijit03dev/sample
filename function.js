// Function with Default Parameters

function greet() {
    console.log("Hello,Avijit");
}
greet()

// Function with Parameters

function add(a, b) {
    console.log(a + b)
}
add(5, 4)

// Function with Return Value

function mutiply(x, y) {
    return x * y;
}

let result = mutiply(4, 5)
console.log(result)

function number(a, b) {
    return a + b
}

let results = number(100, 200)
console.log(results)

function names(avijit) {
    return 'papu das'
}

let fullName = names("")
console.log(fullName)

// Called Before It’s Written (Hoisting)

sayHi()
function sayHi(hii) {
    console.log("Hello Avijit")
}

// Function with Default Parameters

function welcome(name = "avijit") {
  console.log("welcome " + name)
}

welcome("papu")

function addName(nikNmae = 'myname'){
    console.log("My Name Is " + nikNmae)
}

addName('Avijit Mahapatra')