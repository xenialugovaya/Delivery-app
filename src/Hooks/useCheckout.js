import { useState } from 'react';

export default function useCheckout(){
    const [checkout, setCheckout] = useState(false);
    return {
        checkout,
        setCheckout
    }
}