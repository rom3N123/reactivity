class Observable implements IObservable<number> {
	private _value;
	public listeners: ObservableListener<number>[] = [];

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

	public subscribe(listener: ObservableListener<number>) {
		this.listeners.push(listener);

		return () => {
			this.listeners.filter(callback => callback !== listener);
		};
	}

	public notify() {
		this.listeners.forEach(func => func(this.value));
	}
}

export { Observable };
