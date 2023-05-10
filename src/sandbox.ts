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



//  The DOM & Type Casting

