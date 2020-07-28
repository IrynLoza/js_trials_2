"use strict";


// 1. isHometown

// Define your function here
function isHometown(town) {

    return town == 'San Francisco'
}

console.log(isHometown('Oakland'))

// 2. getFullName

// Define your function here
function getFUllName(first_name, last_name) {

    return `${first_name} ${last_name}`
}

console.log('Harry', 'Potter')

// 3. calculateTotal

// Define your function here
function calculateTotal(basePrice, state, tax=0.05) {

    const subtotal = basePrice * (1 + tax);

    let fee = 0;

    if (state === 'CA') {
        fee = 0.03 * subtotal;    
    } else if (state === 'PA') {
        fee = 2
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;    
        } else {
            fee = 3
        } 
    }

    return subtotal + fee
}

console.log(calculateTotal(50, 'CA'))
console.log(calculateTotal(50, 'PA'))
console.log(calculateTotal(50, 'MA'))
console.log(calculateTotal(150, 'MA'))
console.log(calculateTotal(50, 'NY'))
