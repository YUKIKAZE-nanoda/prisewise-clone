import React from 'react'
import { Props } from 'react-responsive-carousel/lib/ts/components/Thumbs'

interface Props {
    title: string;
    iconSrc: string;
    value: string;
    borderColor: string;
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor }: Props) => {
    return (
        <div className={`price-info_card border-1-[${borderColor}]`}>
            <p className='text-base text-black-100'>{title}</p>
            <div className='flex gap-1'>
                <Image src={iconSrc} alt={title} wid/>

            </div>
        </div>
    )
}

export default PriceInfoCard