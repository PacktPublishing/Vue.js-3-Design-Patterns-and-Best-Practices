import countries from "./countries.json"
import states from "./states.json"
import USA_cities from "./USA_localities.json"
import ARG_cities from "./ARG_localities.json"

const LOCALITIES={
    "USA": USA_cities,
    "ARG": ARG_cities
}

const service={
    getCountries(){
        return countries.sort();
    },
    getStatesByCountry(country_code){
        return states[country_code].sort()
    },
    getCitiesByCountryAndState(country_code, state_name){
        let cities=LOCALITIES[country_code].filter(item=>{
            return state_name==item.state
        })
        return cities.sort();
    }
}

export default service;