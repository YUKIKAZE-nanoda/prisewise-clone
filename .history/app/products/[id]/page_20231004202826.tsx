
import { getProductById } from '@/lib/actions'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import React from 'react'

type Props = {
    params: { id: string }
}

const ProductDetails = async ({ params: { id } }: Props) => {
    const product = await getProductById(id)

    if (!product) redirect('/')


    return (
        <div className='product-container'>
            <div className='flex gap-2 xl:flex-row flex-col'>
                <div className=''>
                    <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={400}
                    className='mx-auto'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails