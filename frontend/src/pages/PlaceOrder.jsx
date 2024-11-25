import React, { useContext, useState } from 'react';
import Title from '../components/Title'; 
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const[method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300 px-4 sm:px-8">

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3 font-semibold">

          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
         <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Full Name'/>
         <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name'/>
        </div>

        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Email'/>
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Address'/>
        <div className="flex gap-3">
         <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
         <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
        </div>
        <div className="flex gap-3">
         <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
         <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode'/>
        </div>
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone Number'/>
      </div>
                 {/*-----------------------RIGHT SIDE------------------------------------------*/}
      <div className= 'bg-[#eeeeee]'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={()=> setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-900' : ''}`}></p>
              <img className= 'h-9 mx-4'src= {assets.stripe_logo}/>
            </div>
            <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-900' : ''}`}></p>
              <img className= 'h-9 mx-4'src= {assets.razorpay_logo}/>
            </div>
            <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-900' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick= {()=> navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm ml-3'>PLACE ORDER </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

