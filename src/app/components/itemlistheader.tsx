export default function ItemListHeader() {
  return (
    <>
      <div className="flex flex-row gap-5 grow pt-3 pb-3 border-b">
        <div className="text-left w-2/12">Product</div>
        <div className="text-center w-6/12">Description</div>
        <div className="text-center w-2/12">Total</div>
        <div className="text-right w-2/12">Quantity</div>
      </div>
    </>
  );
}
