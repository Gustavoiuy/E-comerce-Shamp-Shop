import type { ProductRepository } from "../../domain/products/productRepository";
import type { Product } from "../../domain/products/product";

export const getProductsUseCase = (repo: ProductRepository) => {
  return {
    execute: async (): Promise<Product[]> => {
      return await repo.getAll();
    }
  };
};
