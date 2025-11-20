// src/components/navbar/Cart.tsx
export const Cart = () => {
  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        {/* Botón del carrito */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-success btn-circle"
        >
          <div className="indicator">
            {/* Ícono del carrito */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {/* Contador de productos */}
            <span className="badge badge-sm indicator-item">2</span>
          </div>
        </div>

        {/* Dropdown del carrito */}
        <div
          tabIndex={0}
          className="dropdown-content z-1000 mt-3 w-56 p-4 shadow-lg bg-base-100 rounded-box"
        >
          <div className="mb-2">
            <span className="font-bold text-lg">2 productos</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Subtotal: <span className="font-semibold text-info">$999</span>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Ver carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
