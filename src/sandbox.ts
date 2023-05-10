let Character :string;
let num : number;
let isLogged: boolean;
let todos :string[];
let mixed : (string | number | boolean )[] = [];
let uid : number|string ;


let todos1: object;
let todos2 : {
    task: string, 
    id : number,
    completed : boolean
};
todos2 = {
    task: 'clean floor', 
    id : 1,
    completed : false
}

// tsc --initi
// tsc -watch
//"outDir": "./public",  
//   "rootDir": "./src",   

// ?  optional 
// = default value 
let greet: Function; 
greet = () => {
    console.log('hello world');
};


const add = (a : number, b :number , c? : number | string ) : number => {
    return a + b 
};
console.log(add(1,2));


const log = (num : number) :void  => {console.log('log', num )};


// type alias
type stringOrNum = string | number;
const log2 = (el : stringOrNum ) :void => {console.log('el', el)};

type objWithName = {name : string, uid: stringOrNum};

// Function Signatures
let greet1 : (user: objWithName ) => void;
greet1 = (user: objWithName ):void => {console.log(`${user.name} says hello!`)};
greet1({name:"Sam", uid: 1});

// enums: are special type in TS which allows up to store set of constants or keywords and assosiate them with numeric value

enum ResourceType {BOOK, AUTHOR, WRITER, FILM};


//tuples: they are like arr but once the data inside iniated, can't be changed; it check type/position
let arr = ['ssd', 1, true];
let tup: [string, number, boolean ] = ['ssd', 1, true];

//  The DOM & Type Casting

// generics: allows us to create reusable blocks of code which can be used with different types
//ex: const uui = <T extends object> (obj:T) => {
    // let uuid = Math.floor(Math.random()* 100);
    // return {...obj, uuid}
// }
// <T extends object>
// <T extends {name:string}>
interface Resource <T> {
    uid: number;
    resourceName : ResourceType;
    data : T;
}
const docThree: Resource<string> = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data : 'dsa'
}
const docThree1: Resource<string[]> = {
    uid: 1,
    resourceName: ResourceType.WRITER,
    data : ['dsa']
}


