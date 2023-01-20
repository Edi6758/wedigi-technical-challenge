import styled from 'styled-components'

export const CardContent = styled.div`
    position: relative;
`

export const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardElement = styled.div`
    max-width: 250px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    margin: 0 auto;
`

export const ImgProduct = styled.img`
    max-width: 350px;
    width: 100%;
`

export const WishlistImg = styled.img`
    position: absolute;
    right: 0;
    cursor: pointer;
`

export const ProductName = styled.h2`
    color: #020202;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
`

export const ExPriceText = styled.p`
    color: #808080;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    text-decoration: line-through;
`

export const PriceText = styled.p`
    color: #da2a2a;
    font-size: 17px;
`

export const InstallmentsText = styled.p`
    color: #020202;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
`


export const AddToCart = styled.button`
    margin-top: 20px;
    width: 200px;
    height: 40px;
    border: none;
    color: #fff;
    background-color: #40b25c;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    :hover {
        background-color: #23813a;
    }
`