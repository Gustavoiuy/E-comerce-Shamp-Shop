import { useProduct } from "../context/ProductContext";
import { CardProduct } from "../ui/components/CardProduct/CardProduct";

export const Home = () => {
  const { products, loading, error } = useProduct();

  return (
    <main className="px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center mt-8 mb-6 text-sky-100">
        Elije tu favorito!!
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
       <div className="w-full flex justify-center">
  <div 
    className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      gap-6 
      max-w-4xl 
      mx-auto 
      place-items-center
    "
  >
    {products.map((p) => (
      <CardProduct key={p._id} product={p} />
    ))}
  </div>
</div>

      )}
    </main>
  );
};
