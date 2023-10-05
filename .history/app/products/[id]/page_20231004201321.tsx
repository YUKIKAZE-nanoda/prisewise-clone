
import { getProductById } from '@/lib/actions'
import React from 'react'

type Props = {
    params: { id: string }
}

const ProductDetails = async ({ params :{id}}: Props) => {
    const product=await getProductById()
    return (
        <div>P{id}</div>
    )
}

export default ProductDetails