class Singleton {
    private static instance: Singleton;
    random: number;
    private constructor() {
        this.random = Math.random();
     }
    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const singleton = Singleton.getInstance()
const singleton2 = Singleton.getInstance()
console.log(singleton.random)
console.log(singleton2.random)