import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../../../store/cart.store";
import { useUIStore } from "../../../store/ui.store";

export const Cart = () => {
  const totalItems = useCartStore((s) => s.totalItems());
  const subtotal = useCartStore((s) => s.subtotal());
  const openCart = useUIStore((s) => s.openCart);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-accent relative cursor-pointer">
        <ShoppingCart className="w-6 h-6" />

        {totalItems > 0 && (
          <span className="badge badge-sm absolute -right-1 -top-1 bg-primary text-white">
            {totalItems}
          </span>
        )}
      </label>

      <div tabIndex={0} className="dropdown-content menu p-4 shadow-lg bg-base-100 rounded-xl w-72">
        <span className="font-semibold text-lg">{totalItems} productos</span>

        <p className="mt-2 text-base">
          Subtotal: <span className="font-bold text-green-600">${subtotal}</span>
        </p>

        <button className="btn btn-primary btn-block mt-4" onClick={() => {
          openCart();          
          (document.activeElement as HTMLElement)?.blur(); //  👈 cierra el dropdown
          }}>
          Ver carrito
        </button>
      </div>
    </div>
  );
};
