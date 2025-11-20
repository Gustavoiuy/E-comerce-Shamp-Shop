import type { ProductRepository } from "../../domain/products/productRepository";
import type { Product } from "../../domain/products/product";

export const getProductByIdUseCase = (repo: ProductRepository) => {
  return {
    execute: async (id: string): Promise<Product> => {
      return await repo.getById(id);
    }
  };
};
