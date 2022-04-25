import { observer, Observable } from './reactivity';

let price = new Observable(5);
let quantity = new Observable(10);
let total = observer(
	[price, quantity],
	([price, quantity]) => price * quantity
);

price.value = 10;
quantity.value = 20;

console.log(total);
