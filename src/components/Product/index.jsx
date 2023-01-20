import React from 'react'
import ButtonAddToCart from '../ButtonAddToCart'
import ButtonWishlist from '../ButtonWishlist'

import {
    CardContent,
    ButtonContent,
    CardElement,
    ImgProduct,
    ProductName,
    ExPriceText,
    PriceText,
    InstallmentsText
} from "./styles"

export const Product = (props) => {

    return (
        <div>
            <CardElement>
                <CardContent>
                    <ButtonWishlist/>
                    <ImgProduct src={props.imageProduct} />
                    <ProductName>{props.productName}</ProductName>
                    <ExPriceText>{props.exPriceText}</ExPriceText>
                    <PriceText>{props.priceText}</PriceText>
                    <InstallmentsText>em até ou <b>{props.installmentsText}</b> sem juros</InstallmentsText>
                </CardContent>
                <ButtonContent >
                    <ButtonAddToCart/>
                </ButtonContent>
            </CardElement>
        </div>
    )
}
export default Product
