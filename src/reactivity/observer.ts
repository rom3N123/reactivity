const observer: Observer<number> = (observable, computeCallback) => {
	const getObservableValues = () =>
		observable.reduce(
			(total: number[], observable) => [...total, observable.value],
			[]
		);

	const initialValue = computeCallback(getObservableValues());
	const ref = { value: initialValue };

	observable.forEach(observable => {
		observable.subscribe(() => {
			ref.value = computeCallback(getObservableValues());
		});
	});

	return ref;
};

export { observer };
