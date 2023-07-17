interface ItemListProps {
  product: string;
  description: string;
  quantity: number;
  price: number;
}

export default function ItemList({
  product,
  description,
  quantity,
  price,
}: ItemListProps) {
  return (
    <>
      <div className="flex flex-row gap-5 pt-3 pb-3">
        <div className="text-left w-2/12 text-sm">{product}</div>
        <div className="text-left w-6/12 text-sm">{description}</div>
        <div className="text-center w-1/12 text-sm">{quantity}</div>
        <div className="text-center w-1/12 text-sm">{price}</div>
        <div className="text-right   w-1/12 text-sm">
          Php {price * quantity}.00
        </div>
      </div>
      <hr />
    </>
  );
}
