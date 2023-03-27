/**
    A simple implementation of the Fibonacci calculator
 */

function fibonacci(n) {
    if (n < 0) {
        throw "Undefined for negative numbers"
    } else {
        switch (n) {
            case 0:
            case 1:
                return n;
            default:
                let pre_1 = 0, pre_2 = 1, value;
                for (let i = 1; i < n; i++) {
                    value = pre_1 + pre_2;
                    pre_1 = pre_2;
                    pre_2 = value;
                }
                return value;
        }
    }
}

function fibonacciPromise(n) {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject()
        } else {
            switch (n) {
                case 0:
                case 1:
                    resolve(n);
                    break;
                default:
                    let pre_1 = 0, pre_2 = 1, value;
                    for (let i = 1; i < n; i++) {
                        value = pre_1 + pre_2;
                        pre_1 = pre_2;
                        pre_2 = value;
                    }
                    resolve(value);
            }
        }
    })
}

export default { Fibonacci: fibonacci, FibonacciPromise: fibonacciPromise }
export { fibonacci as Fibonacci, fibonacciPromise as FibonacciPromise }