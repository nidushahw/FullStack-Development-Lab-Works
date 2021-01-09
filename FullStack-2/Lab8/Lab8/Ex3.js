function product(name, price) {
    let productData = {};
    productData.name = name;
    productData.price = price;
    productData.getInfo = function () {
        return ("The item: " + this.name + " costs " + this.price)
    }
    return productData;

}
var apples = product("apples", 25);
apples.getInfo();

var soda = product("soda", 2);
soda.getInfo();

