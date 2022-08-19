const test = { name:'Pankaj', age:36 };
let city = 'Pune', pincode = 412101;

function tester(city, pincode) {
    console.log(this, city, pincode);
}

// ===================== Polyfill for call method ==============
Function.prototype.myCall = function(scope, ...args) {
    scope._this = this;    //_this is just a variable, you can use any name
    return scope._this(...args);
}

// ===================== Polyfill for apply method ===============
Function.prototype.myApply = function(scope, args) {
    scope._this = this;   //_this is just a variable, you can use any name
    return scope._this(...args);
} 

// ===================== Polyfill for bind method ==============
Function.prototype.myBind = function(scope, ...args) {
    scope._this = this;  //_this is just a variable, you can use any name
    return function() {
        return scope._this(...args);
    };
} 

//call - allows to call function & pass parameters to the function being called, 
//       any arguments given after the object to be bound to this will be passwed along with function
tester.myCall(test, city, pincode);

//bind - instead of calling function immediately, 
//       bind keeps copy of function and call it whenever required.
//       new function will already have value, parameters set already.
const testObj = tester.myBind(test, city, pincode);
testObj();

// apply: works same as call, just insetad of passing arguments one by one 
//        we pass as array.
tester.myApply(test, [city, pincode]);