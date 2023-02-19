import { describe, expect, test } from "vitest"
import { mount } from "@vue/test-utils"

// Import the component to test
import FibonacciInput from "../components/FibonacciInput.vue"

describe("Check Component action and event", ()=>{
    test("Enter value and emit event on button click", ()=>{
        let wrapper=mount(FibonacciInput)

        // Enter the value in the input component
        wrapper.find("input").setValue(10)

        // Find the button and activate it
        wrapper.find("button").trigger("click")

        // Capture the event parameters
        let inputEvents=wrapper.emitted("input")

        // Assert the event was emitted, and with the correct value
        // Each event provides an array with the arguments passed
        expect(inputEvents[0]).toEqual([10])
        // or
        expect(inputEvents[0][0]).toBe(10)
    })
})
