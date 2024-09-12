"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    get getIdProduct() {
        return this.idProduct;
    }
    set setIdProduct(idProduct) {
        this.idProduct = idProduct;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
exports.Product = Product;
Product.ENABLE = 1;
Product.DISABLE = 2;
Product.LOCK = 3;
Product.PENDING = 4;
Product.DELETE = 99;
