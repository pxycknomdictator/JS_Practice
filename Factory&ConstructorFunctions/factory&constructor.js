// Factory Functions

// Factory functions is a function that help us to create multiple objects without using similer code.

// After listning this factory function you might thought that "oh my god this is very difficult" but, This is easiest like normal funcions

// Example
// const addTwoNumbers = (n1, n2) => {
//     return n1 + n2;
// }

// console.log(addTwoNumbers(5,5))

// Just like that factory functions works but that always create an Object


const CarFactoryFunction = (carname, carmodel, carcolor, carcompany) => {
    // return an Object
    return {
        // These for lines are the shorthand to write a key value pairs
        carname,
        carmodel,
        carcolor,
        carcompany,
        // if we remove this upper four lines code will still works!
        LetsMake: () => {
            return `Congratulations your ${carcompany} ${carname} ${carmodel} ${carcolor} painted Successfully Created.` ;
            
        }
    }
}


const firstCar = CarFactoryFunction("Corolla", 2024, "black", "Toyota");
console.log(firstCar.LetsMake());

const secondCar = CarFactoryFunction("Civic", 2023, "white", "Honda");
console.log(secondCar.LetsMake());


// Now lets Talk about Constructor function
// Constructor function similar task to create a object but there is the difference between like --> new and this keyword

// Example
// If you want your code works use normal function not arrow functions
function ConstructorFunction(carname, carmodel, carcolor, carcompany){
    this.carname = carname;
    this.carmodel = carmodel;
    this.carcolor = carcolor;
    this.carcompany = carcompany;
    this.create = () => {
        return `Congratulations your ${this.carcompany} ${this.carname} ${this.carmodel} ${this.carcolor} painted Successfully Created.` ;
    }
}

const car1 = new ConstructorFunction("Corolla", 2024, "black", "Toyota")
console.log(car1.create());
