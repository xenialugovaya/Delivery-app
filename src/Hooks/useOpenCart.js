import { useState } from 'react';

export default function useOpenCart(){
    const [openCart, setOpenCart] = useState({ menuGrid: 12, checkoutGrid: 12, cartGrid: false, cartOpen: false });
    return {
        openCart,
        setOpenCart
    }
}