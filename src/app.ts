// ! to tell TS that this element for sure exist on the Dom.
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// const anchor = document.querySelector('a')!;
// console.log(anchor.);


// list template instance 

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log('children', form.children)


const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul  = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;

    if(type.value === "invoice"){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
   list.reder(doc, type.value, 'end');
});


// classes
type invoice =  {
    client : string;
    details : string;
    amount : number;
}



const invoice11 = new Invoice("Sam", "work for Vue", 40);
console.log('inv', invoice11.format())


// modules
// interface
interface isPerson {
    name : string,
    age : number,
    speak(a:string): void,
    spean(a:number): number
}; 
