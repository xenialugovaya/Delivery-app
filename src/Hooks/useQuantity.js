import { useState } from 'react';

export default function useQuantity(quantity = 1){
  const [value, setValue] = useState(quantity);

  return{
    value,
    setValue,
  };
} 