import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCartStore } from "../../../store/cart.store";
import { useUIStore } from "../../../store/ui.store";

export const SideCart = () => {
  const { isCartOpen, closeCart } = useUIStore();

  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());

  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity ${
        isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeCart}
    >
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-blue-950 shadow-xl p-6 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Tu carrito</h2>

          <div className="flex items-center gap-3">
            {items.length > 0 && (
              <button
                className="text-red-400 hover:text-red-600 transition"
                onClick={clear}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}

            <button onClick={closeCart}>
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Lista de productos */}
        <div className="flex flex-col gap-4 overflow-y-auto h-[70vh] pr-2">
          {items.length === 0 ? (
            <p className="text-gray-300 text-center mt-10">Tu carrito está vacío</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="font-bold text-green-400">${item.price}</p>

                  {/* Controles */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                      onClick={() =>
                        item.quantity === 1
                          ? removeItem(item.id)
                          : decreaseQty(item.id)
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                      onClick={() => increaseQty(item.id)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 border-t pt-4">
          <p className="text-lg font-semibold flex justify-between">
            Subtotal:
            <span className="text-green-400 font-bold">${subtotal}</span>
          </p>

          <button className="btn btn-primary w-full mt-3">
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
};
