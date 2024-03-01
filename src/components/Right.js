import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import SearchContext from '../Context/Searchcontext'

export default function Right({ p2 }) {


    const valuefomsearch = useContext(SearchContext)
    console.log(valuefomsearch)

    var [api, setapi] = useState([])
    useEffect(() => {
        if (p2 != '' || valuefomsearch != '') {
            var ans = (p2 != '') ? p2 : valuefomsearch
            fetch('https://fakestoreapi.com/products/category/' + ans)
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    if (json.length > 0) {
                        setapi(json)
                    }
                })
        }
    }, [p2], valuefomsearch)

    return (
        <div>
            {
                (api && api.length > 0) ? (
                    <>
                        <h1>All Products</h1>
                        <div className='row'>
                            <Product allpro={api} />                            
                        </div>
                    </>
                ) : ('No Data Found')
            }
        </div>
    )
}