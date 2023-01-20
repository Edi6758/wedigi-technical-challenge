import React, { useState } from 'react'
import wishlistIcon from '../../assets/wishlist.svg'
import wishlistIconFull from '../../assets/wishlist-full.svg'

import {
    WishlistBtn
} from "./styles"

export const ButtonWishlist = () => {
    const [teste, setTeste] = useState(true);
    console.log(teste)
    return (
        <div>
            { 
                teste ? (
                    <WishlistBtn onClick={() => setTeste(false)}><img src={wishlistIcon} /></WishlistBtn>       
                ):(<WishlistBtn onClick={() => setTeste(true)}><img src={wishlistIconFull} /></WishlistBtn>)
            }
        </div>

    )
}
export default ButtonWishlist