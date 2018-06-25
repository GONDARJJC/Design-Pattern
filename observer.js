// 订阅发布模式

class Observable {
	constructor() {
		this.observers = [];
	}

  // 订阅方法，return是为了可以链式调用，f是要往数组里传递的方法
	subscribe(f) {
		this.observers.push(f);
		return this
	}

  // 取消订阅，用了一个过滤的方法
	unsubscribe(f) {
		this.observers = this.observers.filter(subscriber => subscriber !== f);
	}

  // 发布方法，就是触发数组里的事件，observer就是那个f，就是要执行的方法
	notify(data) {
		this.observers.forEach(observer => observer(data));
	}
}

const headingsObserver = new Observable()

let p1 = (value) => {
	console.log(1, value);
}
let p2 = (value) => {
	console.log(2, value);
}
let p3 = (value) => {
	console.log(3, value);
}
headingsObserver.subscribe(p1).subscribe(p2).subscribe(p3)

headingsObserver.notify('123')
headingsObserver.unsubscribe(p1)
console.log('\n');
headingsObserver.notify('123')