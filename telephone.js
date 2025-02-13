class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = new Set();
    }
    
    addPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Phone number ${number} already exists.`);
        } else {
            this.phoneNumbers.add(number);
            console.log(`Phone number ${number} added.`);
        }
    }

    removePhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.phoneNumbers.delete(number);
            console.log(`Phone number ${number} removed.`);
        } else {
            console.log(`Phone number ${number} not found.`);
        }
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Phone number ${number} is not in your contacts.`);
        }
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }
}

class Observer {
    constructor(name, callback) {
        this.name = name;
        this.callback = callback;
    }

    update(phoneNumber) {
        this.callback(phoneNumber)
    }
}

const myPhone = new Telephone();

const printPhoneNumberObserver = new Observer("PrintPhoneNumber", (number) => {
    console.log(number);
});

const nowDialingObserver = new Observer("NowDialing", (number) => {
    console.log(`Now Dialling ${number}`);
})

myPhone.addObserver(printPhoneNumberObserver);
myPhone.addObserver(nowDialingObserver);

myPhone.addPhoneNumber("2347023232");
myPhone.dialPhoneNumber("2347023232");


