let carType = 'mazda'
let color = 'yello'
let model = 'cx5'

function isMyCar(carType, color, model) {
    if (carType === 'mazda' && color === 'red' && model === 'cx5') console.log('Yes i found my Car!')
    else console.log('I dont need this Car!')
}

isMyCar(carType, color, model)