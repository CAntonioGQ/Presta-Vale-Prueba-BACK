import { Request, Response, NextFunction } from "express";
import { ProductRepository } from "../../../domain/repository/product.repository";
import { ProductEntity } from "../../entity/product.entity";

export class ProductController {
  constructor(private productRepository: ProductRepository<ProductEntity>) { }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const product = await this.productRepository.create(body);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products = await this.productRepository.list();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idProduct } = req.params;
      const product = await this.productRepository.get(idProduct);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idProduct } = req.params;
      const body = req.body;
      const product = await this.productRepository.update(idProduct, body);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idProduct } = req.params;
      const product = await this.productRepository.remove(idProduct);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}
