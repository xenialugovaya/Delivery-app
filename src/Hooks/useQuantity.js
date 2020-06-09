import { useState } from 'react';

export default function useQuantity(quantity = 1){
  const [value, setValue] = useState(quantity);

  function onChange(event){
    if (!(+event.target.value >= 1)) {
       setValue(1);
       return;
    }
     setValue(+event.target.value);
  }

  return{
    value,
    setValue,
    onChange
  };
} 