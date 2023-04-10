import { describe, expect, test } from "vitest"
import { Fibonacci, FibonacciPromise } from "../services/Fibonacci.js"


describe("Test the results in fibonacci()", () => {

    test("Results according to the series definition", ()=>{
        
        // Expected values as defined by the series
        expect(Fibonacci(0)).toBe(0)
        expect(Fibonacci(1)).toBe(1)
        expect(Fibonacci(2)).toBe(1)
        expect(Fibonacci(3)).toBe(2)

        // A value defined by the calculation of the series
        expect(Fibonacci(10)).toBe(55)

    })
})

describe("No negative numbers", () => {
    test("Out of range, must fail and throw an error", ()=>{

        // The series is not defined for negative numbers, so it must throw an error.
        expect(()=>Fibonacci(-5)).toThrow()
    })
})

describe("Check async function", ()=>{
    // For testing asynchronouse functions, the testing function should be async 
    // and we "await" the entire "expect" resolution
    test("Resolve promise", async ()=>{
        await expect(FibonacciPromise(10)).resolves.toBe(55)
    })
})
