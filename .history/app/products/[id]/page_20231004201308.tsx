
import React from 'react'

type Props = {
    params: { id: string }
}

const ProductDetails = ({ params :{id}}: Props) => {
    const product=await
    return (
        <div>P{id}</div>
    )
}

export default ProductDetails