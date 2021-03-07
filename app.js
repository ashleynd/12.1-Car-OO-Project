
// PART ONE 
class Vehicle{
    constructor(make,model,year){
        console.log("INSIDE VEHICLE CONSTRUCTOR")
        for(let part of [make,model,year]) 
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return `Beep.`;
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999)



// PART TWO
class car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

// PART THREE
class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return `VROOM!`;
    }
}

// PART 4 
class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }












































// // DEFINING METHODS IN A CLASS: 

// // A class is an Object, that is a template, with shared methods. 
// // Must start with a capital letter 
// class Triangle{
//     constructor(a,b,c){
//         console.log("INSIDE TRIANGLE CONSTRUCTOR")
//         for(let side of [a,b,c]) {
//             if(Number.isFinite(side) || side <= 0){
//             // throw new Error('Sides must be positive numbers!');
//         } 
//     }
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     greet(){
//         console.log('HELLO FROM TRIANGLE!');
//     } 
//     display(){
//         return `Triangle with sides of ${this.a}, ${this.b} and ${this.c}`;
//     }
//     getArea(){
//          const {a,b,c} = this;
//          const s = (a + b + c) / 2;
//          return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// isBig(){
//     return this.getArea() > 50;
// }
// }

// // const t1 = new Triangle(3,4,5);
// // const t2 = new Triangle(5,9,10);
// // const t3 = new Triangle(30,40,50);
// // t1.display();

// // keyword .this refers to the instance in the triangle class 

// // CREATING INSTANCES HERE. A NEW OBJECT BASED OFF OF THE ABOVE TEMPLATE
// // OR CAN BE MADE USING A CONTRUCTOR IN THE FUNCTION 
// // const firstTri = new Triangle(); 
// // firstTri.a = 3;
// // firstTri.b = 4;
// // const secondTri = new Triangle();
// // secondTri.a = 9;
// // secondTri.b = 12;



// // EXTENDING A CLASS 
// // IF YOU CALL SUPER INSIDE HERE, IT WILL CALL THE PARENT CONTRUCTOR, WILL RUN THAT CODE,
// // AND YOU CAN ADD IN MORE PROPERTIES HERE
// // .super calls a function or a method 
 
// class RightTriangle extends Triangle{
//     constructor(a,b,c){
//     if(a * a + b * b !== c * c){
//         throw new Error('Invalid C side for right triangle!');
//     }
//     console.log("INSIDE RIGHT TRIANGLE CONSTRUCTOR")

//     super(a,b,c); 
//     this.hypot = c;
// }
// isRightTriangle() {
//     return true;
// }
// display(){
//     return 'Right ' + super.display();
// };
// } 



