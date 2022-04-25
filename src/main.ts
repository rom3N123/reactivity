class Observable implements IObservable<number> {
	_value;
	listeners: ObservableListener<number>[] = [];

	constructor(value: number) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
		this.notify();
	}

	subscribe(listener: ObservableListener<number>) {
		this.listeners.push(listener);

		return () => {
			this.listeners.filter(callback => callback !== listener);
		};
	}

	notify() {
		this.listeners.forEach(func => func(this.value));
	}
}

const observer: Observer<number> = (observable, computeCallback) => {
	const initialValue = computeCallback(observable.value);
	const ref = { value: initialValue };

	observable.subscribe(value => {
		ref.value = computeCallback(value);
	});

	return ref;
};

let price = new Observable(5);
let quantity = 2;
let total = observer(price, price => price * quantity);

price.value = 10;
price.value = 20;
