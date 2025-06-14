interface PriceProps {
  price: number;
  discountPercentage: number;
}

const ProductPrice = ({ price, discountPercentage }: PriceProps) => {
  const discount = (price * discountPercentage) / 100;
  const discountedPrice = price - discount;

  return (
    <div className="flex items-center gap-3 mt-1">
      {/* Harga setelah diskon */}
      <span className="text-[14px] md:text-base font-bold text-gray-700">
        {discountedPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
      </span>

      {/* Harga asli dicoret */}
      <span className="text-xs md:text-sm line-through text-gray-500">
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>

      {/* Label diskon */}
      <span className="text-xs md:text-sm bg-red-100 text-red-600 px-2 py-[2px] rounded">
        -{discountPercentage.toFixed(0)}%
      </span>
    </div>
  );
};

export default ProductPrice;
