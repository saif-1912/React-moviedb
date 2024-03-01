import React from 'react'

export default function Product({ allpro }) {
    return (
        <>
            {
                allpro && allpro.map(({ image, price, title }) =>
                    <div className='col-3 text-center'>
                        <p>{title}</p>
                        <img src={image} className='img-fluid'/>    
                        <strong>{price}</strong> 
                    </div>

                )
            }
        </>
    )
}
