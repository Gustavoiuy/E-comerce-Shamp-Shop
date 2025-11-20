// src/ui/modals/AddToCartModal.tsx
import { useState, useEffect } from "react";
import type { Product } from "../../domain/products/product";
import { useCartStore } from "../../store/cart.store";

interface Props {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  
}

export const AddToCartModal = ({ isOpen, product, onClose }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (isOpen) setQuantity(1);
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[200] px-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-fadeIn relative">
        
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Imagen */}
        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nombre */}
        <h2 className="text-xl font-bold mt-4 text-cyan-900">{product.name}</h2>

        {/* Precio */}
        <p className="text-2xl mt-2 font-semibold text-green-600">
          ${product.price}
        </p>

        {/* Cantidad */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-700 font-medium">Cantidad</span>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 bg-cyan-950 rounded-lg flex items-center justify-center hover:bg-blue-900"
            >
              -
            </button>

            <span className="text-lg font-bold w-6 text-center text-cyan-950">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 bg-cyan-950 rounded-lg flex items-center justify-center hover:bg-blue-900"
            >
              +
            </button>
          </div>
        </div>

        {/* Botón agregar */}
        <button
          onClick={handleAddToCart}
        
          className="mt-6 w-full bg-black bg-cyan-950 py-3 rounded-xl hover:bg-gray-900 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
