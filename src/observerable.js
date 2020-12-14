class Observer {
  constructor(fn) {
    this.update = fn;
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(function (item) {
      item.update();
    });
  }
}

const subject = new Subject();
const o1 = new Observer(() => console.log("observer 1"));
const o2 = new Observer(() => console.log("observer 2"));
subject.addObserver(o1);
subject.addObserver(o2);
export default subject;
