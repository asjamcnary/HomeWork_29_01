let inputs = [0, 10, 0, 0, 40, 20, 10, 1]

let i = 0
let sum = 0
let count = 0

while (inputs[i] % 10 === 0) {
    sum += inputs[i]
    if (inputs[i] !== 0) count++
    i++
}

console.log('avg', sum / count)