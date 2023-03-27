import { describe, expect, test } from "vitest"
import { fibonacci, fibonacciPromise } from "../services/Fibonacci.js"


describe("Test the results in fibonacci()", () => {

    test("Results according to the series definition", ()=>{
        
        // Expected values as defined by the series
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)

        // A value defined by the calculation of the series
        expect(fibonacci(10)).toBe(55)

    })
})

describe("No negative numbers", () => {
    test("Out of range, must fail and throw an error", ()=>{

        // The series is not defined for negative numbers, so it must throw an error.
        expect(()=>fibonacci(-5)).toThrow()
    })
})

describe("Check async function", ()=>{
    // For testing asynchronouse functions, the testing function should be async 
    // and we "await" the entire "expect" resolution
    test("Resolve promise", async ()=>{
        await expect(fibonacciPromise(10)).resolves.toBe(55)
    })
})
