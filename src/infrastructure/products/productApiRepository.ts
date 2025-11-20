import axios from "axios";


import type { ProductRepository } from "../../domain/products/productRepository";
import type { Product } from "../../domain/products/product";

axios.defaults.withCredentials = true;

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/products`;

export class ProductApiRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const res = await axios.get(API_URL);
    return res.data;
  }

  async getById(id: string): Promise<Product> {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
}

}


