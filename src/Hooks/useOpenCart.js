import { useState } from 'react';

export default function useOpenCart(){
    const [openCart, setOpenCart] = useState({ menuGrid: 12, cartGrid: 0, cartOpen: false });
    return {
        openCart,
        setOpenCart
    }
}