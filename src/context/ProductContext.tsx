import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

import type { Product } from "../domain/products/product";

import { getProductsUseCase } from "../application/products/getProductsUseCase";
import { ProductApiRepository } from "../infrastructure/products/productApiRepository";
import { getProductByIdUseCase } from "../application/products/getProductByIdUseCase";

const repo = new ProductApiRepository();
const getProducts = getProductsUseCase(repo);
const getProductById = getProductByIdUseCase(repo);

interface ProductContextValue {
  products: Product[];
  product: Product | null;
  loading: boolean;
  productLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined);

export const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [productLoading, setProductLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProducts.execute();
      setProducts(data);
      setError(null);
    } catch (err: any) {
      setError(err.message ?? "Error inesperado");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProductById = useCallback(async (id: string) => {
  setProductLoading(true);
  try {
    const data = await getProductById.execute(id);
    setProduct(data);
    setError(null);
  } catch (err: any) {
    setError(err.message ?? "Error al obtener el producto");
  } finally {
    setProductLoading(false);
  }
}, []);




  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider
      value={{  products,product,loading,productLoading,error,fetchProducts,fetchProductById }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProduct debe estar dentro del provider");
  return ctx;
};
