const Car = require("./car");
// {
//     car,
// //     // ?,methods

// } 

  

describe("Car", () => {
    const car = new Car("Toyota", 15000, "Hybrid engine");
    
    test('can access properties of car', () => {
      expect(car.manufacturer).toBe("Toyota");
      expect(car.price).toBe(15000);
      expect(car.engineType).toBe("Hybrid engine");
    });


});


