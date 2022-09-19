/**
    A singleton provider of dependencies
 */

const dependencyService={
    dependencies:{},
    provide(name, dependency){
        this.dependencies[name]=dependency;
        return this;
    },
    inject(name){
        return this.dependencies[name]??null;
    }
}

export default dependencyService;