import { useProduct } from "../context/ProductContext";
import { CardProduct } from "../ui/components/CardProduct/CardProduct";

export const Home = () => {
  const { products, loading, error } = useProduct();

  return (
    <main className="px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center mt-8 mb-6 text-sky-800">
        shamp | shop
      </h1>

      {loading && (
        <div className="flex justify-center mt-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {error && (
        <p className="text-center text-red-600 text-lg font-medium mt-4">
          {error}
        </p>
      )}

      {!loading && !error && (
        <section
          className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-6 justify-items-center mb-10
          "
        >
          {products.map((p) => (
            <CardProduct key={p._id} product={p} />
          ))}
        </section>
      )}
    </main>
  );
};
