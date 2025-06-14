import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { CartModel } from "@/types/carts"
import CartItem from "./CartItem"
// import ProductPrice from "../products/ProductPrice"

const CartProducts = (cart: CartModel) => {
  const resultDiscount = () => {
    const diskon = (cart.total - cart.discountedTotal);
    const persen = (diskon / cart.total) * 100;
    return parseFloat(persen.toFixed(2));
  }

  return (
    <Card>
      <CardContent className="px-3 md:px-5">
       {/* CART CONTENT START */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          {/* CART ITEMS START */}
          <div className="flex-[2]">
            <div className="text-lg font-bold mb-3">Cart Items</div>  
              <div className="flex flex-col gap-5">
                {cart.products.map((product, index) => (
                  <CartItem key={index} {...product} />
                ))}
              </div>
          </div>
          {/* CART ITEMS END */}

          {/* SUMMARY START */}
          <div className="flex-[1.5]">
            <div className="text-lg font-bold">
              Summary{" "}
              <span>{`(${cart.totalQuantity} ${
                cart.totalQuantity > 1 ? "items" : "item"
              })`}</span>
            </div>
            <div className="font-semibold text-gray-500">
              Total Products: {cart.totalProducts}
            </div>

            <div className="py-4 px-4 mt-3 bg-black/[0.05] rounded-xl">
              <div className="flex flex-col gap-3">
                {/* <div className="uppercase text-base font-medium text-gray-600">
                  Subtotal
                </div> */}
                <div className="flex flex-col gap-3">
                  {/* total */}
                  <div className="flex justify-between w-full">
                    <span className="text-base font-bold text-gray-700">Total</span>
                    <span className="text-base font-bold text-gray-700">
                      {cart.total.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                      })}
                    </span>
                  </div>
                  {/* discount */}
                  <div className="flex justify-between w-full pb-5 border-b">
                    <span className="text-base font-bold text-gray-700">Discount</span>
                    <span className="text-base font-bold text-gray-700">
                       <span className="text-sm bg-red-100 text-red-600 px-2 py-[2px] rounded">
                        -{resultDiscount()}%
                      </span>
                    </span>
                  </div>
                  {/* grand total */}
                  <div className="flex justify-between w-full">
                    <span className="text-2xl font-thin text-[#1E3A8A]">SUBTOTAL</span>
                    <span className="text-2xl font-bold text-[#1E3A8A]">
                      {cart.discountedTotal.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal is the total amount after discounts are applied, excluding shipping costs and international transaction fees.
              </div>
            </div>
          </div>
          {/* SUMMARY END */}
        </div>
        {/* CART CONTENT END */}
      </CardContent>
    </Card>
  )
}

export default CartProducts
