// ! to tell TS that this element for sure exist on the Dom.
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// const anchor = document.querySelector('a')!;
// console.log(anchor.);
// list template instance 
const form = document.querySelector('.new-item-form');
// console.log('children', form.children)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.reder(doc, type.value, 'end');
});
const invoice11 = new Invoice("Sam", "work for Vue", 40);
console.log('inv', invoice11.format());
;
