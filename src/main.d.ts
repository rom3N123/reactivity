type ObservableListener<T> = (value: T) => any;

interface IObservable<T> {
	value: T;
	listeners: ObservableListener<T>[];
	subscribe: (listener: ObservableListener<T>) => () => void;
	notify: () => void;
}

type Observer<T> = (
	observable: IObservable<T>[],
	computeCallback: (values: T[]) => T
) => any;
