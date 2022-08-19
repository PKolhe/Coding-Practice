const testArray = [10, 50, 'Pankaj', true, 40, 20];

//===================== Polyfill for foreach loop =====================

// testArray.forEach((value, index, array) => console.log(value + ' Present at index ' + index + ' in array:' + array));

Array.prototype.myforEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
function callback(value, index, array) {
    console.log(value + ' Present at index ' + index + ' in array:' + array);
}

testArray.myforEach(callback);

//===================== Polyfill for map function =====================
/* The map() method creates a new array populated with the results of 
  calling a provided function on every element in the calling array. */

/* let result = testArray.map((value, index, array) => {
    return value + ' - ' + typeof(value);
});

console.log(result); */

Array.prototype.myMap = function(callback) {
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
};

let result = testArray.myMap((value, index, array) => {
    return value + ' - ' + typeof(value);
});

console.log(result);

//===================== Polyfill for filter function =====================
/* The filter() method creates a shallow copy of a portion of a given array, 
   filtered down to just the elements from the given array that pass the 
   test implemented by the provided function. */

/* result = testArray.filter((value, index, array) => {
    return typeof(value) === 'number';
});

console.log(result, testArray); */

Array.prototype.myFilter = function(callback) {
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

result = testArray.myFilter((value, index, array) => {
    return typeof(value) === 'number';
});

console.log(result);

//===================== Polyfill for find function =====================
/* The find() method returns the first element in the provided array that 
   satisfies the provided testing function. If no values satisfy the testing 
   function, undefined is returned. */

/*result = testArray.find((value, index, array) => {
    return value > 20;
});

console.log(result);*/

Array.prototype.myFind = function(callback) {
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            return this[i];
        }
    }
    return newArr;
};

result = testArray.myFind((value, index, array) => {
    return value > 10;
});

console.log(result);

//===================== Polyfill for string.split function =====================

result = 'My name is Pankaj'.split(' ');

console.log(result);

String.prototype.mySplit = function(spliter) {
    const res= [];
    if(spliter === '') {
        return Array.from(this);
    }
    const startSplit = (str, i) => {
        if (i > this.length) {
            return ;
        }
        const index = str.indexOf(spliter);
        if(index >= 0) {
            res.push(str.substring(0, index));
            startSplit(str.substring(index + spliter.length), index + spliter.length);
        } else {
            res.push(str);
        }
    };
    startSplit(this, 0);
    return res;
};

result = 'My name is Pankaj'.mySplit('is');
//result = 'My name is Pankaj'.mySplit('');
//result = 'My name is Pankaj'.mySplit(' ');
//result = 'My name is Pankaj'.mySplit('My name is Pankaj');
        
console.log(result);