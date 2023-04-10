/**
    A naive partial implementation of a reactive object,
    implementing the Observer and Proxy pattern
 */

let temperature={
        celsius:0,
        fahrenheit: 32
    },
    handler={
        set(target, key, value){
            target[key]=value;
            switch(key){
                case "celsius":
                    target.fahrenheit=calculateFahrenheit(value);
                    break;
                case "fahrenheit":
                    target.celsius=calculateCelsius(value);
            }
        },
        get(target, key){
            return target[key];
        }
    },
    degrees=new Proxy(temperature, handler)

// Auxiliar functions
function calculateCelsius(fahrenheit){
    return (fahrenheit - 32) / 1.8
}

function calculateFahrenheit(celsius){
    return (celsius * 1.8) + 32
}

degrees.celsius=25
console.log(degrees)