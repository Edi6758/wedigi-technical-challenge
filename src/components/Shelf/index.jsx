import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../Product';
import tennisImage1 from '../../assets/tenis01.webp'
import tennisImage2 from '../../assets/tenis02.webp'
import tennisImage3 from '../../assets/tenis03.webp'
import tennisImage4 from '../../assets/tenis04.webp'
import tennisImage5 from '../../assets/tenis05.webp'


import {
    ContainerShelf,
    TitleShelf
} from "./styles"

const productData = [
    {
        id: 1,
        imageProduct: tennisImage1,
        productName: "Tênis Nike Air Zoom Pegasus 39 Premium Masculino",
        exPriceText: "R$ 1299,99",
        priceText: "R$ 1299,99",
        installmentsText: "12x de R$ 91,67"
    },
    {
        id: 2,
        imageProduct: tennisImage2,
        productName: "Tênis Nike Air Zoom Pegasus 39 Premium Masculino",
        exPriceText: "R$ 1299,99",
        priceText: "R$ 1299,99",
        installmentsText: "12x de R$ 91,67"
    },
    {
        id: 3,
        imageProduct: tennisImage3,
        productName: "Tênis Nike Air Zoom Pegasus 39 Premium Masculino",
        exPriceText: "R$ 1299,99",
        priceText: "R$ 1299,99",
        installmentsText: "12x de R$ 91,67"
    },
    {
        id: 4,
        imageProduct: tennisImage4,
        productName: "Tênis Nike Air Zoom Pegasus 39 Premium Masculino",
        exPriceText: "R$ 1299,99",
        priceText: "R$ 1299,99",
        installmentsText: "12x de R$ 91,67"
    },
    {
        id: 5,
        imageProduct: tennisImage5,
        productName: "Tênis Nike Air Zoom Pegasus 39 Premium Masculino",
        exPriceText: "R$ 1299,99",
        priceText: "R$ 1299,99",
        installmentsText: "12x de R$ 91,67"
    }
]

const Shelf = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    const product = productData.map((item) =>
        <Product
            productName={item.productName}
            imageProduct={item.imageProduct}
            exPriceText={item.exPriceText}
            priceText={item.priceText}
            installmentsText={item.installmentsText}
            id={item.id}
        />)

    return (

        <ContainerShelf>
            <TitleShelf>Mais vendidos</TitleShelf>
            <Carousel responsive={responsive}>
                {product}
            </Carousel>
        </ContainerShelf>
    )
}

export default Shelf
