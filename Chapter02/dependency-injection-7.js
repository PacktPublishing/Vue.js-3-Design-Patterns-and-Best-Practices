/**
    A parent module that implements all the dependencies
    for the application
 */

import dependencyService from "./dependency-injection-6";
import myDependency1 from "myFile1"
import myDependency2 from "myFile2"
import dbManager from "dbManager" 

dependencyService
    .provide("dependency1", myDependency1)
    .provide("dependency2", myDependency2)
    .provide("dbManager", dbManager)

// Then, to use the service
const dbManager=dependencyService.inject("dbManager") 