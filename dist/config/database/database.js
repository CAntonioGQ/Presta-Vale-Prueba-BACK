"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../core/infrastructure/entity/product.entity");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "cruzado321",
    database: "prueba_tecnica",
    entities: [product_entity_1.ProductEntity],
    synchronize: true,
    logging: false
});
