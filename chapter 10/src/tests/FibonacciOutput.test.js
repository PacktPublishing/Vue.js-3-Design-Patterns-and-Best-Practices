import { describe, expect, test } from "vitest"
import { mount } from "@vue/test-utils"

// Import the component to test
import FibonacciOutput from "../components/FibonacciOutput.vue"

describe("Check Component props and HTML", ()=>{
    test("Props input and HTML output", ()=>{
        // Mount the component to interact with it
        // We pass a prop and check the output html/text
        const wrapper=mount(FibonacciOutput, {props:{number:10}})
        expect(wrapper.text()).toContain(55)
    })
})
