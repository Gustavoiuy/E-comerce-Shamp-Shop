import { useEffect } from "react";
import { useParams } from "react-router";
import { useProduct } from "../context/ProductContext";
import { ProductDetailCard } from "../ui/components/CardProduct/ProductDetailCard";


export const DetailProduct = () => {
  const { id } = useParams();
  const { product, productLoading, error, fetchProductById } = useProduct();

  useEffect(() => {
    if (id) fetchProductById(id);
  }, [id]);

  return (
    <main className="px-4 md:px-10">
      {productLoading && (
        <div className="flex justify-center mt-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {error && (
        <p className="text-center text-red-600 text-xl mt-10">{error}</p>
      )}

      {!productLoading && product && <ProductDetailCard product={product} />}
    </main>
  );
};
