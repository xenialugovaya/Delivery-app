import { useEffect } from 'react';

export default function useTitle({orders, checkout}){
  let amount = 0;
  if(orders.length !== 0){
    orders.forEach((order) => {
      amount += order.quantity;
    });
  }
    useEffect(() => {
      if(!checkout){
        document.title = orders.length === 0 ? "Pizza delivery" : `[${amount}] items in your cart`;
      } else {
        document.title = "Checkout";
      }
        
    });
}