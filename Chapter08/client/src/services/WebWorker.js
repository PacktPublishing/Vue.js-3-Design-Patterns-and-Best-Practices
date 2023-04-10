import WebWorker from "../webworker/index.js?worker"

const _worker = new WebWorker()

const service = {
    queue:{},
    request(command, payload = {}) {
        return new Promise((resolve, reject) => {

            // Command message for the web worker
            let message = {
                    id: crypto.randomUUID(),
                    command,
                    payload//: JSON.stringify(payload)
                }

            // Save reference
            service.queue[message.id]={resolve, reject}

            // Dispatch the message
            _worker.postMessage(message);

        })
    },
    processMessage(data) {
        let id=data.id
        if(data.success){
            service.queue[id].resolve(data.payload)
        }else{
            service.queue[id].reject(data.payload)
        }
        delete service.queue[id];
    }
}

_worker.onmessage = (event) => {
    service.processMessage(event.data);
}

export default service;