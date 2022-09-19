/**
    A code segment the implements a command pattern
 */

 class CommandInvoker{

    addCommand(command_data){
        // .. queue implementation here
    }

    runCommand(command_data){

        switch(command_data.action){
            case "eat":
                // ..
                break;

            case "code":
                // ..
                break;
                
            case "repeat":
                // ..
                break;
        }
    }
 }