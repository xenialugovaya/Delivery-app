import { useState } from 'react';

export default function useCurrency(){
  const [currency, setCurrency] = useState('USD');
  return {
    currency,
    setCurrency
  }
}