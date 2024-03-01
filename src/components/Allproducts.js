import React, { useEffect, useState } from 'react'
import Product from './Product'


export default function Allproducts({ p2 }) {

    var [pro, setpro] = useState([])

    useEffect(() => {
        var apipath = (p2 == '') ? `https://fakestoreapi.com/products/` : `https://fakestoreapi.com/products/category/${p2}`;
        console.log(apipath)

        fetch(apipath)
            .then(val => val.json())
            .then(res =>
                setpro(res)
            )

    }, [p2])

    return (
        <div>
            <h1>All Products</h1>
            <div className='row'>
                <Product allpro={pro}/>
            </div>
        </div>
    )
}
