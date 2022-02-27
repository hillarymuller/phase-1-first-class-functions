function callback() {
    console.log("function called");
}
function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunction() { console.log("did it");
};
}
function returnsAnAnonymousFunction(){
    return function () {console.log("done");
};
}