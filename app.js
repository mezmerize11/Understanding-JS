/*
LESSON 2 Numbers and Maths

let Celcius = -5;
const Farenheit = 86;

const ConFarenheit = (Celcius * 9/5 ) + 32;
const ConCelcius = (Farenheit - 32) * 5 / 9;

console.log(ConFarenheit);
console.log(ConCelcius);


*/

//const text = 'My Name is ';
//const Name = 'Lee';

const Basketballs = 2095;
const Shippingfee = 499;
const tshirts = 799;
const items = 2;

const shipnhand = (Shippingfee * 2) /100;
const totalamount = ((Basketballs * items) + (tshirts * items)) / 100;
const taxcalc = (((Basketballs * items) + (tshirts * items) + (Shippingfee * 2)) * 0.1);
const totalb4tax = totalamount + shipnhand;


const display = `Items (${items * 2}): $` + totalamount + `\n Shipping and Handling: $` + shipnhand + `\n
Total Before Tax: $${totalb4tax} \nEstimated Tax(10%): $${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100}`;
alert(display);
//const concatenation = 'Total Cost: $' + calculation;


//console.log(interpolation);
//alert(interpolation);

