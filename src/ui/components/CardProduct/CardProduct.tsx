import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import type { Product } from "../../../domain/products/product";
import { motion } from "framer-motion";

interface Props {
  product: Product;
}


export const CardProduct = ({ product }: Props) => {
  const { _id, name, price, imageUrl, description, stock } = product;

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
        bg-white rounded-2xl shadow-md p-4 border border-gray-200
        hover:shadow-xl transition-shadow
        max-w-sm w-full flex flex-col
      "
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Stock badge */}
        {stock === 0 && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md shadow-md">
            Agotado
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="font-semibold text-xl mt-4 line-clamp-1 text-gray-800">
        {name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>

      {/* Price */}
      <span className="
        inline-block mt-3 text-lg font-bold
        bg-gradient-to-r from-yellow-400 to-yellow-500
        text-gray-900 px-3 py-1 rounded-lg shadow-sm
      ">
        ${price}
      </span>

      {/* Footer */}
      <footer className="flex justify-between items-center mt-5 gap-3">
        <Link
          to={`/detailProduct/${_id}`}
          className="
            flex-1 text-center bg-blue-600 text-white py-2 rounded-xl
            hover:bg-blue-700 transition font-medium shadow-sm
          "
        >
          Ver detalle
        </Link>

        <button
          disabled={stock === 0}
          className={`
            flex items-center justify-center gap-2 flex-1 py-2 rounded-xl font-medium shadow-sm
            transition
            ${
              stock === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }
          `}
        >
          <FaShoppingCart size={15} />
          {stock === 0 ? "Sin stock" : "Agregar"}
        </button>
      </footer>
    </motion.article>
  );
};
