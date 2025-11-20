import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../domain/products/product";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  addItem: (product: Product, qty: number) => void;

  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;

  removeItem: (id: string) => void;
  clear: () => void;

  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      /** Añadir producto al carrito */
      addItem: (product, qty) => {
        const items = get().items;
        const exists = items.find((i) => i.id === product._id);

        if (exists) {
          return set({
            items: items.map((i) =>
              i.id === product._id
                ? { ...i, quantity: i.quantity + qty }
                : i
            ),
          });
        }

        set({
          items: [
            ...items,
            {
              id: product._id!,
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl,
              quantity: qty,
            },
          ],
        });
      },

      /** Incrementar cantidad */
      increaseQty: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }),

      /** Decrementar cantidad */
      decreaseQty: (id) => {
        const item = get().items.find((i) => i.id === id);
        if (!item) return;

        // Si es el último, eliminar
        if (item.quantity === 1) {
          return set({
            items: get().items.filter((i) => i.id !== id),
          });
        }

        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          ),
        });
      },

      /** Eliminar completamente */
      removeItem: (id) =>
        set({
          items: get().items.filter((i) => i.id !== id),
        }),

      /** Vaciar el carrito */
      clear: () => set({ items: [] }),

      /** Total de productos */
      totalItems: () =>
        get().items.reduce((acc, i) => acc + i.quantity, 0),

      /** Subtotal en dinero */
      subtotal: () =>
        get().items.reduce((acc, i) => acc + i.quantity * i.price, 0),
    }),

    {
      name: "cart-storage",
    }
  )
);
