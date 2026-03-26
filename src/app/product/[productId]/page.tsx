import NotFound from "@/app/not-found";

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params;

  if (parseInt(productId)> 100) {
    (NotFound());
  }

  return (
    <>
      <h1>Product Details</h1>
      <p>Details for product ID: {productId}</p>
    </>
  );
}
