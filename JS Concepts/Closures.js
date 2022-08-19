//Closure 1
function addFactory(storeNum){
    return function(num){
        return storeNum + num;
    }
}

let add10 = addFactory(10);
let add20 = addFactory(20);
let add30 = addFactory(30);
console.log(add10(5));  // 15
console.log(add20(6));  // 26
console.log(add30(7));  // 37

//Closure 2
function addFactory2(storeNum){
    storeNum = 50;
    return function(num){
        return storeNum + num;
    }
    
}

add10 = addFactory2(10);
add20 = addFactory2(20);
add30 = addFactory2(30);
console.log(add10(5)); // 55 instead of 15
console.log(add20(6)); // 56 instead of 16
console.log(add30(7)); // 57 instead of 17

//Closure 3
function mainFunction(storeNum1) {
    return function addFactory2(storeNum2){
        return function(num){
            return storeNum1 + storeNum2 + num;
        }
    }
}

add10 = mainFunction(10);
add20 = mainFunction(20);
add30 = mainFunction(30);
console.log(add10(5)(6)); // 21
console.log(add20(5)(6)); // 31
console.log(add30(5)(6)); // 41

//Closure 4 - Drawback of Closure - How Memory Leak happens
// It's closure but not used properly - storeNum3 is a global variable and not gets formed in the Closure
// Even if you make addFactory2() as null - global variable will still be there and not garbage collected.
function addFactory2(storeNum){
    storeNum3 = 50;
    return function(num){
        return storeNum + num + storeNum3;
    }
}

let madd10 = addFactory2(10);
let madd20 = addFactory2(20);
let madd30 = addFactory2(30);
console.log(madd10(5)); // 55 instead of 15
console.log(madd20(6)); // 56 instead of 16
console.log(madd30(7)); // 57 instead of 17
addFactory2 = null;
console.log(storeNum3); // 50

//Closure 5 - Drawback of Closure - How Memory Leak happens through DOM references
var elements = {
    textarea: document.getElementById('submitBtn'),
    button: document.getElementById('inputVal')
};
function doStuffs() {
    return function buttonClick() {
        elements.button.click();
    }
}
document.getElementById('inputVal').remove();
console.log(elements.button);  
//button exists in element object even after removing from DOM, all references of buttons not gets deleted. 