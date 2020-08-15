const sumOld = function(a, b) {
    return a + b
}

// Arrow Function
const sum = (a, b) => a + b // Quando existe apenas uma instrução, o return é implícito

// Com apeans um argumento, podemos omitir os parênteses
const returnValue = a => a

// Se a função não possuir argumentos, é necessário os parênteses vazios
const hello = () => 'Hello'

// Arrow Functions não podem ser usadas como funções construtoras
const Car = () => {
    this.foo = 'bar'
}

// console.log(new Car()) ERRO

// Hoisting não funciona com Arrow Functions