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
      <div className="flex flex-row gap-5 pt-3 pb-3 grow">
        <div className="text-left w-2/12">{product}</div>
        <div className="text-center w-6/12">{description}</div>
        <div className="text-center w-2/12">{quantity}</div>
        <div className="text-right w-2/12">{price}</div>
      </div>
    </>
  );
}
