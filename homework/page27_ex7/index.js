let inputs = [-1, 2, 6, 4, 10, 4, 6, 0]

let i = 1
let max = inputs[0]

while (inputs[i] > 0) {
    if (max < inputs[i]) max = inputs[i]
    i++
}

console.log('max', max)