// Write a "Person" class to hold all the details


// class Person {

//     constructor (Pname, age, gender, Nationality) {
//         this.Pname= Pname //(this.) basically a current class scope it will check what Person current class is having and accessing current
//         this.age=age
//         this.gender=gender
//         this.Nationality= Nationality
//         }

//       PersonDetails() {
//         console.log("Hello Eveyone");
//         console.log(`Name: ${this.Pname}`);
//         console.log(`age: ${this.age}`);
//         console.log(`gender: ${this.gender}`);
//         console.log(`Nationality: ${this.Nationality}`);
        
//       }  

// }

// let details= new Person("Arun",25,"Male","Indian") //this object of a Person class
// You can print like this by calling a function
// details.PersonDetails() // this is calling PersonDetails function

// //or you can print like this
//  console.log("Name:",...details.Pname.split(" "));
//   console.log("Age: "+details.age);
//  console.log("gender:",...details.gender.split(" "));
// console.log("Nationality:",...details.Nationality.split(" "));

//////////////////////////

// Write a class to calculate the Uber price.


class UberPriceCalculator {

    static BASE_FARE = 3.0;
    
    static PER_MILE_RATE = 2.5;
    
    static PER_MINUTE_RATE = 1.0;
    
    constructor(distance, duration) {
    
    this.distance = distance;
    
    this.duration = duration;
    
    }
    
    calculateFare() {
    
    const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
    
    const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
    
    const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
    
    return totalFare;
    
    }
    
    getDistance() {
    
    return this.distance;
    
    }
    
    setDistance(distance) {
    
    this.distance = distance;
    
    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
    
    }
    
    }
    
    const calculator = new UberPriceCalculator(5.5, 15);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: $${fare.toFixed(2)}`);