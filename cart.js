///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/
//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/
const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
//CODE HERE
const summedPrice = cart.reduce((total, amount) => total + amount.price, 0);
console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => {
    cartTotal = cartTotal * (tax + 1)
    cartTotal = cartTotal - couponValue;
    return cartTotal;
}
console.log(calcFinalPrice(25,5,0.06))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
/*
    Customer Obj:
    - name - string //id
    - phone - string//contact
    - address - string//for delivery
    - email - string//marketing
    - fav order - string + orderTotal//marketing data
    - pastOrder - tracks totalInYear orders//marketing data
*/
/*
    Now, create a customer object following your own
    guidelines.
*/
//CODE HERE
const customer = {
    name: 'Hayden',
    phone: '555-555-5555',
    address: '4 Privet Drive, North London',
    email: 'hayden@haydenchapman.com',
    favOrder: 'sausage' + 32.27,
    pastOrder: 110.88,
}
console.log(customer)