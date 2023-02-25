import React from 'react';

const CartItem = (props) => {
  console.log(props.item);
  return (
    <div>
      <li
        className='rounded mx-4 my-2 px-4 py-2 border-solid border-white border-2 hover:border-double hover:border-gray-400 hover:border-4'
        key={item.id}
      >
        {props.item.name} - {correctPrice(props.item?.price)}
      </li>
    </div>
  );
};

export default CartItem;
