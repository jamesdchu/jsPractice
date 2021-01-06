function logScope() { 
    var localVar = 2; 
    if (localVar) { 
        var localVar = 'Different';
        console.log("nested localvar" + localVar);
    }
    console.log("IM NOT DIFFERENT")
}