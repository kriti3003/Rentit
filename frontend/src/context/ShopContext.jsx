import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => { 

    const currency = '₹';
    const delivery_fee = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const[cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select product size');
            return;
        }
    
        const cartData = structuredClone(cartItems); // Clone current state
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1; 
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }
    
        console.log("Adding to Cart:", cartData); // Debugging log
        setCartItems(cartData);
    };
    
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]> 0){
                        totalCount += cartItems[items][item];
                    }
                } catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId, size, quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
         
    }
{/*----------------------------------------Calculate Total Amount Of Cart -----------------------------------------------*/}
const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
        const itemInfo = products.find((product) => product._id === items);
        if (!itemInfo) {
            console.warn(`Product with ID ${items} not found in products list`);
            continue;
        }
        for (const size in cartItems[items]) {
            try {
                const quantity = cartItems[items][size];
                if (quantity > 0) {
                    totalAmount += itemInfo.price * quantity;
                }
            } catch (error) {
                console.error(`Error calculating total for item ${items}, size ${size}:`, error);
            }
        }
    }

    return totalAmount;
};



const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, 
    getCartCount, updateQuantity,
    getCartAmount, navigate
}

    return (
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
};
export default ShopContextProvider;