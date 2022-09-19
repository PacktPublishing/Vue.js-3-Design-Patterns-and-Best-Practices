/**
    The implementation of a Fibonacci calculation following the 
    callback pattern, synchronous and asynchronous
 */

function FibonacciSync(n, callback) {
    if (n < 2) {
        callback(n)
    } else {
        let pre_1 = 1, pre_2 = 1, value;
        for (let i = 2; i < n; i++) {
            value = pre_1 + pre_2;
            pre_1 = pre_2;
            pre_2 = value;
        }
        callback(value);
    }
}

function FibonacciAsync(n, callback) {
    setImmediate(() => {
        if (n < 2) {
            callback(n)
        } else {
            let pre_1 = 1, pre_2 = 1, value;
            for (let i = 2; i < n; i++) {
                value = pre_1 + pre_2;
                pre_1 = pre_2;
                pre_2 = value;
            }
            callback(value);
        }
    })
}

function FibonacciPromise(n) {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject()
        } else {
            if (n < 2) {
                resolve(n)
            } else {
                let pre_1 = 1, pre_2 = 1, value;
                for (let i = 2; i < n; i++) {
                    value = pre_1 + pre_2;
                    pre_1 = pre_2;
                    pre_2 = value;
                }
                resolve(value);
            }
        }
    })
}

console.log("Before")
FibonacciPromise(9).then(value=>console.log(value), ()=>{console.log("Not defined for negative numbers")})
console.log("After")
