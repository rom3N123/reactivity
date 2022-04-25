type ObservableListener<T> = (value: T) => any;

interface IObservable<T> {
	value: T;
	listeners: ObservableListener<T>[];
	subscribe: (listener: ObservableListener<T>) => () => void;
	notify: () => void;
}

type Observer<T> = (
	observer: IObservable<T>,
	computeCallback: ObservableListener<T>
) => any;
