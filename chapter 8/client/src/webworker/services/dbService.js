import Dexie from "dexie"

// Start up database
const db=new Dexie("Notes")

// DB versioning
db.version(1).stores({
    notes: "++id,title" // Makes "title" searchable
})

const service={

    addNote(note={}){
        return new Promise(async (resolve, reject)=>{
            try{
                let result_id=await db.notes.add(JSON.parse(note))
                resolve({id:result_id})
            }catch(err){
                console.log(err)
                reject({})
            }
        })
    },
    getNotes(){
        return new Promise(async (resolve, reject)=>{
            try{
                let result=await db.notes.toArray();
                resolve(result)
            }catch{
                reject([])
            }
        })
    },
    deleteNote({id}){
        return new Promise(async (resolve, reject)=>{
            try{
                let result=await db.notes.delete(id)
                resolve({})
            }catch{
                reject({})
            }
        })
    }

}

export default service;