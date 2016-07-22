function functionFunction(str) {
    var args = Array.from(arguments);    
    return function() {        
        return args.concat(Array.from(arguments)).join(', ')    
    }
}
