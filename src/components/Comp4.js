import React from 'react'
import { useSelector } from 'react-redux'


export default function Comp4() {
    const catval = useSelector(state => state.category.value)
    return (
        <div className='container'>
            <h4>Comp4 {catval}</h4>
            <div className="row">   
                <div className="col-3">

                </div>
                <div className="col-9">

                </div>
            </div>
        </div>
    )
}
