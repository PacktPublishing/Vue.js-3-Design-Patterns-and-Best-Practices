/**
    An example of a module that uses the example 
    implementation from dependency-injection-3.js
 */

import projects from "projects.js"
import dbManager from "dbManager.js" 

projects.dbManager=dbManager; 
projects.getAllProjects(); 