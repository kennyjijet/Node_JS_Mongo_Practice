/*const a = {
    valueOf() {
        return 5;
    }
}

console.log(a == 5); // true
console.log(a === 5); // false
console.log(a); // false

console.log(10 - 9 + "test"); // false
*/


function myObj() {
    this.val = 3
    myObj.myOjectValue++;
}
myObj.myOjectValue = 4;

myObj1 = new myObj();
myObj2 = new myObj();
myObj3 = new myObj();

console.log(myObj);


const chainedAddition = (a) => {
    return (b) => {
        //console.log(a + b)
        return ("1" + "5");
    }
}
/*
var a = 0
var arr = [1, 2, 3];
a = arr;
console.log(a);
*/
var a = new Array(5).toString();
console.log(a);

var g = 1.5 - 1 * 2;
console.log(g);

/* 
In JavaScript any variable which is uninitialized has value undefined. Similar behavior goes with functions. So every function which does not returns any value, returns undefined by default.
For eg, console.log prints value on standard output and returns undefined as return value.

const add = (a, b) => console.log(a + b)

add(1, 2) // Result is 3

const addCurried = a => b => console.log(a + b)

addCurried(1)(2) // Result is also 3

const anotherAddCurried = a => b => c => console.log(a + b + c)

anotherAddCurried(1)(2)(3) // Result is 6

*/
console.log(chainedAddition(5)(4));
