//confusing comparison operator
//  empty string, vs 0 vs "0"  (transitity broken)

console.log("" == 0); // true
console.log("0" == 0); // true
console.log("" == "0"); // false

console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false

console.log(false == "0"); // true
console.log(false === "0"); // false

//Unlike many other loose equality comparisons, JavaScript does not convert null into 0 when comparing them with ==.
console.log(null == 0); // false

console.log(undefined == 0); // false

console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(undefined == false);