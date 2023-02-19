import { describe, expect, test } from "vitest"
import { Fibonacci, FibonacciPromise } from "../services/Fibonacci.js"


describe("Self contained function", () => {

    test("Numbers in range", ()=>{
        
        expect(Fibonacci(0)).toBe(0)
        expect(Fibonacci(1)).toBe(1)
        expect(Fibonacci(2)).toBe(1)
        expect(Fibonacci(3)).toBe(2)
        expect(Fibonacci(10)).toBe(55)

    })
})

describe("No negative numbers", () => {
    test("Out of range, must fail and throw an error", ()=>{
        expect(()=>Fibonacci(-5)).toThrow()
    })
})

describe("Check async function", ()=>{
    test("Resolve promise", async ()=>{
        await expect(FibonacciPromise(10)).resolves.toBe(55)
    })
})
