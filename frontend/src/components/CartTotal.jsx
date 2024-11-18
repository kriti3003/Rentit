import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'; // Assuming Title is a reusable component

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    // Calculate subtotal and total
    const subtotal = getCartAmount ? getCartAmount() : 0;
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1="CART" text2="TOTAL" />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                {/* Subtotal */}
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>
                        {currency} {subtotal.toFixed(2)}
                    </p>
                </div>
                <hr />
                {/* Shipping Fee */}
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>
                        {currency} {delivery_fee.toFixed(2)}
                    </p>
                </div>
                <hr />
                {/* Total */}
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>
                        {currency} {total.toFixed(2)}
                    </b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;

