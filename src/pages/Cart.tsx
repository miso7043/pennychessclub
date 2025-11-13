import { mainStyle } from '../styles/mainStyle';

export default function Cart() {
  return (
    <div className={mainStyle.pageContainer}>
      <h1 className={mainStyle.h1.primary}>Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className={mainStyle.section}>
            <h2 className="text-gray-800 text-2xl font-semibold mt-0 mb-4">Cart Items</h2>
            
            <div className="bg-white p-6 rounded text-center">
              <p className={`${mainStyle.text.muted} text-lg`}>Your cart is empty</p>
              <a 
                href="/shop" 
                className={`inline-block mt-4 ${mainStyle.button.primary} no-underline`}
              >
                Continue Shopping
              </a>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <section className="p-6 bg-gray-50 rounded-lg sticky top-24">
            <h2 className="text-gray-800 text-2xl font-semibold mt-0 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className={`${mainStyle.utils.flexBetween} ${mainStyle.text.body}`}>
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className={`${mainStyle.utils.flexBetween} ${mainStyle.text.body}`}>
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className={`${mainStyle.utils.flexBetween} ${mainStyle.text.body}`}>
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between text-gray-900 font-bold text-lg">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>

            <button
              disabled
              className={`w-full ${mainStyle.button.disabled}`}
            >
              Proceed to Checkout
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
