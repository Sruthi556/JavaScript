let a=3
console.log(a)
console.log(typeof(a))

let b=234.5
console.log(typeof(b))

let c= "Sruthi Maddineni"
console.log(typeof(c))

let d= true
console.log(typeof(d))

//let c =a+b    // SyntaxError: Identifier 'c' has already been declared
// we cannot redeclare variable with let keyword but possible with var keyword
 c=a+b // re assigning is allowed with let keyword
console.log(c)