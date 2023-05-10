"use strict";
let Character;
let num;
let isLogged;
let todos;
let mixed = [];
let uid;
let todos1;
let todos2;
todos2 = {
    task: 'clean floor',
    id: 1,
    completed: false
};
// tsc --initi
// tsc -watch
//"outDir": "./public",  
//   "rootDir": "./src",   
// ?  optional 
// = default value 
let greet;
greet = () => {
    console.log('hello world');
};
const add = (a, b, c) => {
    return a + b;
};
console.log(add(1, 2));
const log = (num) => { console.log('log', num); };
const log2 = (el) => { console.log('el', el); };
// Function Signatures
let greet1;
greet1 = (user) => { console.log(`${user.name} says hello!`); };
greet1({ name: "Sam", uid: 1 });
//  The DOM & Type Casting
