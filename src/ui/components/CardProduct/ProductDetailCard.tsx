
import { FaShoppingCart } from "react-icons/fa";
import type { Product } from "../../../domain/products/product";

interface Props {
  product: Product;
}

export const ProductDetailCard = ({ product }: Props) => {
  const { name, price, imageUrl, description, stock } = product;

  return (
    <section className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Imagen */}
      <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-emerald-500">{name}</h1>

        <p className="text-amber-100 text-lg">{description}</p>

        <span className="text-2xl font-bold text-green-600">${price}</span>

        <p className="text-sm text-gray-500">
          Stock:{" "}
          <strong className={stock > 0 ? "text-green-600" : "text-red-600"}>
            {stock > 0 ? stock : "Sin stock"}
          </strong>
        </p>

        <button
          disabled={stock === 0}
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg
          text-white text-lg transition
          ${
            stock === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          <FaShoppingCart size={18} />
          {stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </section>
  );
};
