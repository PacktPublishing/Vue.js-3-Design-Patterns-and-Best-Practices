import { reactive } from 'vue';


let handler = {
    
    // Internal reactive object to keep in sync
    props: reactive({}),

    // Get trap, to intercept properties and methods
    get(target, prop, receiver) {

        // Check if the target has the property
        let value = target[prop]

        if (value instanceof Function) {
            // Call of a native method, pass it through
            return (...args) => {
                return target[prop](...args)
            }

        } else {

            // Check if the value exists in the store
            value = target.getItem(prop)

            if (value) {
                // A value exists already, sets it as default
                this.props[prop] = value;
            }

            // Request of a property, return it
            return this.props[prop]
        }
    },

    // Set operations, to handle normal assignments
    set(target, prop, value) {
        
        // Keep storage and internal reactivity in sync
        target.setItem(prop, value)
        this.props[prop] = value
        
        // Operation Ok
        return true; 
    }
}

const Decorator= new Proxy(window.sessionStorage, handler);

function useSessionStorage(){
    return Decorator;
}

// We capture both types of imports
export default useSessionStorage;
export { useSessionStorage }