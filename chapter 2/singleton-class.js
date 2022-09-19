class myClass{

    constructor(){
        if(myClass._instance){
            return myClass._instance;
        }else{
            myClass._instance=this;
        }
        return this;
    }

    myFunction(){
        console.log("Singleton alive and well")
    }
}

export default new myClass()