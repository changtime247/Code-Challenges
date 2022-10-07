// 7 kyu
// Barista problem

// You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.

// So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
// People start giving you their orders.
// Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.

// Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.

// Task:

// Given a list of the times you need to brew each coffee, return the minimum total waiting time.
// If you get it right, you will get that raise your boss promised you!

// Note that:

// It is possible to receive no orders. (It's a free day :), maybe the next day your boss will start giving you some orders himself, you probably don't want that :) )

// You can only brew one coffee at a time.

// Since you have one coffee machine, you have to wait for it to brew the current coffee before you can move on to the next one.

// Ignore the time you need to serve the coffee and the time you need to take the orders and write down the time you need to make each one of them.

// If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.

// The order in which you brew the coffee is totally up to you.

// Examples:

// coffees = [3,2,5,10,9]  ->  85
// coffees = [20,5]        ->  32
// coffees = [4,3,2]       ->  22

// ----------------------
// parameters: given an array of arbitrary numbers, representing the amount of time it takes to make one particular coffee order (or making time)
// return the lowest possible total wait time
// only one coffee machine to make all the coffee orders
// each customer waits cumulatively (with an additional 2 minutes after an order is made to clean to coffee machine)
// examples:
// barista([2,10,5,3,9])          -->     85
// barista([4,3,2])               -->     22
// barista([20,5])                -->     32
// barista([20,5,4,3,1,5,7,8])    -->     211
// barista([5,4,3,2,1])           -->     55
// pseudocode: create two arrays from parameter
// array 1:
// sort the array ascdending order to make coffee with shorter wait times first, since coffee can be brewed in any order
// each coffee order will take not only the number value (making time) but also the time it took to make all previous orders
// map the sorted array to reprroduce or slice the elements of the array (up to the element in question). 
// 2,3,4 --> 2, [2,3], [2,3,4]
// array 2:
// using similar logic, create an array representing the cumulative amount of coffee cleaning time
// first order will have no wait
// second order 2 minute wait
// third order 2+2 minute wait
// nth order (n-1)*2 minute wait
// [2*0, 2*1, 2*2]
// reduce both arrays and return sum of the two

function barista(coffees){
    let sorted = coffees.sort((a,b)=>a-b);
    let mapped = sorted.map((ele,idx)=>sorted.slice(0,idx+1));
    return mapped.map((ele)=>ele.reduce((a,b)=>a+b,0)).reduce((a,b)=>a+b,0) + Array.from({length:coffees.length}, (e,i)=>+i*2).reduce((a,b)=>a+b,0);
}