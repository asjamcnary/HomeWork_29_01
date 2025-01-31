let inputs = ['banana', 10, 'computer', 100, 'apple', 5, 'box', 15, 'pencil', 6]

let maxProduct = null
let maxCost = -9999

for (let i = 0; i < 10; i += 2) {
    let product = inputs[i]
    let cost = inputs[i + 1]
    if (cost > maxCost) {
        maxCost = cost
        maxProduct = product
    }
}

console.log('product', maxProduct)