import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { ProductAdapterRepository } from "../../adapters/product.repository.adapter";

const productRouter = Router();

const controller = new ProductController(new ProductAdapterRepository());

productRouter.post("/productos", controller.create.bind(controller));
productRouter.get("/productos", controller.list.bind(controller));
productRouter.get("/productos/:idProduct", controller.get.bind(controller));
productRouter.put("/productos/:idProduct", controller.update.bind(controller));
productRouter.delete("/productos/:idProduct", controller.remove.bind(controller));

export default productRouter;
