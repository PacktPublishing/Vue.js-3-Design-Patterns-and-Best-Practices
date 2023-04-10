import axios from "axios"

axios.defaults.baseURL="http://localhost:3000"

const service={
    GET(payload={}){
        return new Promise((resolve, reject)=>{
            axios
                .get(payload.url, {params: { data: payload.data}} )
                .then(result=>{
                    if(result.status>=200 && result.status<300){
                        resolve(result.data)
                    }else{
                        reject()
                    }
                })
                .catch(()=>{
                    reject()
                })

        })

    },
    POST(payload={}){
        return new Promise((resolve, reject)=>{
            axios
                .post(payload.url, { data: payload.data} )
                .then(result=>{
                    if(result.status>=200 && result.status<300){
                        resolve(result.data)
                    }else{
                        reject()
                    }
                })
                .catch(()=>{
                    reject()
                })

        })
    }
}

export default service;