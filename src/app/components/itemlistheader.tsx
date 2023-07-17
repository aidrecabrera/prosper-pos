export default function ItemListHeader() {
  return (
    <>
      <div className="flex flex-row gap-5 grow pt-3 pb-3 border-b">
        <div className="text-left w-2/12">Product</div>
        <div className="text-left w-6/12">Description</div>
        <div className="text-center w-1/12">Quantity</div>
        <div className="text-center w-1/12">Price</div>
        <div className="text-right w-1/12">Total</div>
      </div>
    </>
  );
}
