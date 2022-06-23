class Subject {
    constructor() {
        this.observers = [];
    }
    
    subcribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(obs => obs.refresh(data));
    }
}

class Observer {
    constructor(func) {
        this.func = func;
    }

    refresh(data) {
        this.func(data);
    }
}

const subject = new Subject();
const obs1 = new Observer(data => {
    console.log(data)
});

const obs2 = new Observer(data => {
    console.log(data.split("").reverse().join(""));
})

subject.subcribe(obs1);
subject.subcribe(obs2)

function change() {
    subject.notify(myText.value);
}