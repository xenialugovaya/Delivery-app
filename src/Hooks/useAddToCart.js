import { useState } from 'react';

export default function useAddToCart(){
    const [addToCart, setAddToCart] = useState(0);
    return {
        addToCart,
        setAddToCart
    }
}