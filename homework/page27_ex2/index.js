let a = 16
let b = 4

if (a % 2 !== 0 || b % 2 !== 0) console.log("Numbers are not even")
else {
    if (a > b) {
        let temp = a
        a = b
        b = temp
    }

    while (a <= b) {
        console.log(a)
        a += 2
    }
}