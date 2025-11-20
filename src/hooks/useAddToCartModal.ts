
import { useState } from "react";
import type { Product } from "../domain/products/product";

export const useAddToCartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  const openModal = (p: Product) => {
    setProduct(p);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProduct(null);
  };

  return {
    isOpen,
    product,
    openModal,
    closeModal,
  };
};
