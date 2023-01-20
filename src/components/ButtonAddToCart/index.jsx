import React, { useState } from 'react'
import { AiOutlineCheck } from "react-icons/ai";

import {
    AddToCart,
    AddToCardTwo
} from "./styles"

export const ButtonAddToCart = () => {
    const [teste, setTeste] = useState(true);
    console.log(teste)
    return (
        <div>
            { 
                teste ? (
                    <AddToCart onClick={() => setTeste(false)}>ADICIONAR</AddToCart>       
                ):(<AddToCardTwo><AiOutlineCheck /> ADICIONADO</AddToCardTwo>)
            }
        </div>

    )
}
export default ButtonAddToCart