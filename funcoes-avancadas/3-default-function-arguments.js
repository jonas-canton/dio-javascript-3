function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(5))
console.log(multiply(5, undefined))
console.log(multiply(5, 0))
console.log(multiply(5, 5))

// Lazy Evaluation
function randomNumber() {
    return Math.random() * 10
}

function multiply2(a, b = randomNumber()) {
    return a * b
}

console.log(multiply2(5))