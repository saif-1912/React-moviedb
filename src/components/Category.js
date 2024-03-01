import React, { useEffect, useState } from 'react'

export default function Category({ p1 }) {
    // console.log(p1)

    var [cat, setcat] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json =>
                setcat(json)
            )
    }, [])

    var myfun = function (value) {
        console.log(value)
        p1(value)
    }

    // console.log(p1)            
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {
                    cat && cat.map(value =>                                                
                            <li onClick={() => { myfun(value) }}>{value}</li>                        
                    )
                }
            </ul>
        </div>
    )
}
