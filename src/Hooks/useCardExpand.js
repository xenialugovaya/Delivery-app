import { useState } from 'react';

export default function useCardExpand(){
  const [cardExpand, setCardExpand] = useState(false);
  return {
    cardExpand,
    setCardExpand
  }
}