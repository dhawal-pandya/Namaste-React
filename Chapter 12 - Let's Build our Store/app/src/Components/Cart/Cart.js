import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, subItem } from '../../Store/cartSlice';

const Cart = (props) => {
  const submitHandle = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Order Placed. LOL');
    props.setIsCart(false);
  };

  const dispatch = useDispatch();

  const clearHandle = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items); // subscribing to the store

  return (
    <div
      className='fixed z-10 h-screen w-screen m-0'
      onClick={() => {
        props.setIsCart(false);
      }}
    >
      <div
        className='fixed z-20 h-screen*0.9 left-1/4 w-screen/2 text-white bg-black'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='flex flex-row justify-end font-extralight p-3'>
          Deliver To: {props.user}
        </div>
        <div className='flex flex-row justify-center font-semibold pb-3'>
          Cart Items:
        </div>
        <ul>
          {cartItems.map((foodItem) => {
            return (
              <>
                <li
                  className='my-2 mx-1 p-1 flex flex-row justify-between rounded px-4 py-2 border-solid border-white border-2  hover:border-gray-400'
                  key={foodItem.id}
                >
                  <div>
                    {foodItem.name} - ₹{foodItem?.price / 100}
                  </div>
                  <div
                    onClick={() => {
                      dispatch(subItem(foodItem));
                      console.log(cartItems);
                    }}
                    className=' p-1 border-solid border-2 rounded-full font-extrabold border-white border-1 h-full m-0 hover:border-gray-400'
                  >
                    —
                  </div>
                </li>
              </>
            );
          })}
        </ul>

        <button
          className='absolute font-bold m-6 py-1 w-1/3 left-0 bg-red-900 hover: border-white hover:border-2 rounded-xl'
          onClick={clearHandle}
        >
          Clear
        </button>
        <button
          className='absolute font-bold m-6 px-3 py-1 w-1/3 right-0 bg-emerald-900 hover: border-white hover:border-2 rounded-xl'
          onClick={submitHandle}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
