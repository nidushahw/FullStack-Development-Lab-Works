function Car(object) {
    this.brand = object.brand;
    this.model = object.model;

    this.getBrand = function () {
        return ("the Manufacturer is " + this.brand);
    }

    this.getModel = function () {
        return ("The model is " + this.model);
    }

}

var tesla = new Car({ brand: "Tesla", model: "S" });
tesla.getBrand();
tesla.getModel();

var camaro = new Car({ brand: "Chevy", model: "camaro" });

camaro.getBrand();
camaro.getModel();