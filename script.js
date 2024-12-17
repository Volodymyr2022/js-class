class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    infoPerson() {
        console.log(`Information about your specialist - ${this.name}, ${this.age} years old, ${this.weight} kg, ${this.height} cm!`);
    }

    get personName() {
        return this.name;
    }

    set personName(newName) {
        this.name = newName;
    }
}

class HandyMan extends Person {
    static workData = {
        Plumbing: 75,
        Electrician: 85,
        Carpentry: 65,
        Painting: 50,
    };

    constructor(name, age, weight, height, work) {
        super(name, age, weight, height);
        this.work = work;
        this.price = HandyMan.workData[work] || 0;
    }

    infoPrice() {
        console.log(`${this.name} - ${this.age} years - Cost of ${this.work} work - ${this.price} per hour`);
    }

    get workType() {
        return this.work;
    }

    set workType(newWork) {
        if (HandyMan.workData[newWork]) {
            this.work = newWork;
            this.price = HandyMan.workData[newWork];
        } else {
            console.error(`No pricing data available for "${newWork}"`);
        }
    }
}

const Vova = new HandyMan('Vova', 34, 95, 187, 'Plumbing');
Vova.infoPerson();
Vova.infoPrice();

console.log(Vova.personName);
Vova.personName = "Volodymyr";
console.log(Vova.personName);

Vova.workType = 'Electrician';
Vova.infoPrice();

Vova.workType = 'Painting';
Vova.infoPrice();

Vova.workType = 'Gardening';