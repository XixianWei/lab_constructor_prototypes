const Dealership = require("./dealership");
const Car = require("./car");

describe("Dealership", () => {
    let dealership;
    beforeEach(() => {
    dealership = new Dealership("MX",3)   
    dealership.addCar(new Car("Toyota", 15000, "Hybrid engine"));
    dealership.addCar(new Car("Ford", 10000, "diesel"));
    });


    test("can count cars in stock", () => {
            expect(dealership.countCarsInStock()).toBe(2);
    });

    test("can add car to stock", () => {
        dealership.addCar(new Car("Ford", 10000, "electric"));
        expect(dealership.countCarsInStock()).toBe(3);
    });

    test("can throw error when at max",() => {
        dealership.addCar(new Car("Toyota", 15000, "Hybrid engine"));
        dealership.addCar(new Car("Ford", 10000, "diesel"));
        expect("Dealership at max");
    });

    test("can get manufacturers", () => {
        expect(dealership.getManufacturers()).toStrictEqual(["Toyota","Ford"]);
    });

    test("can find cars by manufacturer", () => {
        expect(dealership.findCarsByManufacturer("Ford")).toStrictEqual([new Car("Ford", 10000, "diesel")]);
    }); // when do we need square brackets?

    test("can find total value",() =>{
        expect(dealership.findTotalValue()).toBe(25000);
    });



    


       

});


