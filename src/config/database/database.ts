import { DataSource } from "typeorm";

import { ProductEntity } from "../../core/infrastructure/entity/product.entity";

export default new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: [ProductEntity],
  synchronize: true,
  logging: false
});