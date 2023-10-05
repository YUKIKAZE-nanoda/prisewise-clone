import React from 'react'
import { Props } from 'react-responsive-carousel/lib/ts/components/Thumbs'

interface Props {
    title: string;
    iconSrc: string;
    value: string;
    borderColor:string;
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor }: Props) => {
    return (
        <div>PriceInfoCard</div>
    )
}

export default PriceInfoCard