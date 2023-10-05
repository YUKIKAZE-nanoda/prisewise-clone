
import { getProductById } from '@/lib/actions'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

type Props = {
    params: { id: string }
}

const ProductDetails = async ({ params :{id}}: Props) => {
    const product=await getProductById(id)

    if(!product) redirect('/')


    return (
        <div>{product}</div>
    )
}

export default ProductDetails