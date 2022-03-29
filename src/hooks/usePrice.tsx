import React, { useState, useEffect } from 'react';


type ShoppingCart = {
  price: number;
  miles: number;
}

const Inner = () => {
  const [inner, setInner] = useState(33)
  useEffect(() => {
    console.log('inner');
  }, [])

  return <button onClick={() => setInner(value => value + 1)}>Inner {inner}</button>;
};


export const Price = ({ shoppingCart }: {shoppingCart: ShoppingCart}) => {
  const { price, miles } = shoppingCart;
  return (
    <>
      <div>Price: {price}</div>
      <div>Miles: {miles}</div>
    </>
  );
};



export const usePrice = ({ shoppingCart }: {shoppingCart: ShoppingCart}) => {

  return { Price, props: { shoppingCart } };
};
