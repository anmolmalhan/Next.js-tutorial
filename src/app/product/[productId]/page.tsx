export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params;

  return (
    <>
      <h1>Product Details</h1>
      <p>Details for product ID: {productId}</p>
    </>
  );
}
