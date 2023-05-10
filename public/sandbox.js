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
// enums: are special type in TS which allows up to store set of constants or keywords and assosiate them with numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["WRITER"] = 2] = "WRITER";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
})(ResourceType || (ResourceType = {}));
;
//tuples: they are like arr but once the data inside iniated, can't be changed; it check type/position
let arr = ['ssd', 1, true];
let tup = ['ssd', 1, true];
const docThree = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: 'dsa'
};
const docThree1 = {
    uid: 1,
    resourceName: ResourceType.WRITER,
    data: ['dsa']
};
