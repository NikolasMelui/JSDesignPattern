function Observable() {
	let observers = [];
	this.sendMessage = msg => {
		observers.forEach(observer => {
			observer.notify(msg);
		});
	};
	this.addObserver = observer => {
		observers.push(observer);
	};
}

function Observer(behavior) {
	this.notify = msg => behavior(msg);
}

const observable = new Observable();
const observerOne = new Observer(msg => console.log(`Message to observer one - ${msg}`));
const observerTwo = new Observer(msg => console.log(`Message to observer two - ${msg}`));

observable.addObserver(observerOne);
observable.addObserver(observerTwo);

setTimeout(() => {
	observable.sendMessage(new Date());
}, 1000);
