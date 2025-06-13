interface PriceProps {
  price: number;
  discountPercentage: number;
}

const ProductPrice = ({ price, discountPercentage }: PriceProps) => {
  const discount = (price * discountPercentage) / 100;
  const discountedPrice = price - discount;

  return (
    <div className="flex items-center gap-3 mt-2">
      {/* Harga setelah diskon */}
      <span className="text-lg font-bold text-gray-700">
        ${discountedPrice.toFixed(2)}
      </span>

      {/* Harga asli dicoret */}
      <span className="text-base line-through text-gray-500">
        ${price.toFixed(2)}
      </span>

      {/* Label diskon */}
      <span className="text-sm bg-red-100 text-red-600 px-2 py-[2px] rounded">
        -{discountPercentage.toFixed(0)}%
      </span>
    </div>
  );
};

export default ProductPrice;
