const service={
    test(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Worker alive and working!")
            }, 3000)
        })
    }
}

export default service;