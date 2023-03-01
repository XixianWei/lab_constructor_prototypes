class Dealership {
    constructor(name, maxNumOfCars) {
        this.name = name;
        this.maxNumOfCars = maxNumOfCars;
        this.inStockCars = [];
    }

    countCarsInStock() {
        return this.inStockCars.length;
    }

    addCar(car){
        if(this.inStockCars.length < this.maxNumOfCars){
            this.inStockCars.push(car);
        } else {
            "Dealership at max";
        }   
    }

    getManufacturers(){
        return this.inStockCars.map(car => car.manufacturer);
    }

    findCarsByManufacturer(manufacturer) {
        return this.inStockCars.filter(car => car.manufacturer === manufacturer);
    }

    findTotalValue(){
        return this.inStockCars.reduce((total, car) => total + car.price, 0);
    }
    // total?
}

module.exports = Dealership;
