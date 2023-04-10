/**
    A syntax example of a promised function with async/await
 */

async function myProcessFunction() {	//1 

    try {							    //2 

        let a = await MyFuncA(),		//3 
            b = await MyFuncB(),
            c = await MyFuncC()

        console.log(a + b + c)		    //4 

    } catch {

        console.log("Error")

    }

}

// Invoke the function normally 

MyProcessFunction()					//5 