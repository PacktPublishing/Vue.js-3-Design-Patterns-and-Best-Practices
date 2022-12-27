/**
    Web Worker
    Handles communications and database operations
 */
import dbService from "./services/dbService";
import netService from "./services/network"
import testService from "./services/test"

const services=[dbService, netService, testService]

function sendRequest(id, success=false,  payload={}){
    self.postMessage({id, success, payload})
}

self.onmessage=(event)=>{
    let data=event.data;

    services.forEach(service=>{
        if(service[data.command]){
            service[data.command](data.payload).then(result=>{
                sendRequest(data.id, true, result)
            }, err=>{
                sendRequest(data.id, false, err)
            })
        }
    })
}

console.log("Web Worker ready!")