import { Product } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface Props {
    product: Product;
}
const ProductCard = ({ product }: Props) => {
    return (
        <Link href={`/products/${product._id}`} className='product-cars'>
            <div>
                <Image
                src={product.image}
                alt={product.title}
                wid
                />
            </div>
        </Link>
    )
}

export default ProductCard