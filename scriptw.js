class Animal {
constructor(name,species){
    this.name = name;
    this.species = species;
}
describe() {
    console.log(`${this.name} is a ${this.species}`)
}
}
 class Dog extends Animal {
     constructor(name,species,beer){
         super(name,species);
         this.beer = beer;
     }
     bark() {
         console.log(`${this.name} says Woof and ${this.beer}!`)
     }
 }

 const myDog = new Dog('Rex','Labrador','Woof');

 myDog.describe();
 myDog.bark();
