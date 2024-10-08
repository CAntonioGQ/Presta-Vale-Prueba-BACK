"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../../../config/database/database"));
const product_entity_1 = require("../entity/product.entity");
const product_1 = require("../../domain/models/product");
class ProductAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(product_entity_1.ProductEntity);
            const product = repository.create(Object.assign(Object.assign({}, data), { status: product_1.Product.ENABLE }));
            yield repository.save(product);
            return product;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(product_entity_1.ProductEntity);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(product_entity_1.ProductEntity);
            const product = yield repository.findOneBy({ idProduct: id });
            if (!product) {
                throw new http_errors_1.NotFound("No existe un producto con el id proporcionado");
            }
            return product;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(product_entity_1.ProductEntity);
            yield repository.update(id, data);
            return this.get(id, query);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(product_entity_1.ProductEntity);
            const product = yield this.get(id, query);
            if (!product) {
                throw new http_errors_1.NotFound("Producto no existe");
            }
            product.status = product_1.Product.DELETE;
            yield repository.save(product);
            return product;
        });
    }
}
exports.ProductAdapterRepository = ProductAdapterRepository;
