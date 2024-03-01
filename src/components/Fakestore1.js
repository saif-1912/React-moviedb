import React, { useState } from 'react'
import Category from './Category'
import Allproducts from './Allproducts'

export default function Fakestore1() {

    var [catvalues, setcatvalues] = useState('')

    function xyz(value) {
        setcatvalues(value)
    } 

    return (
        <div className='container'>
            <h1>Fakestore - State lift</h1>
            <div className='row'>
                <div className='col-3 border border-1'>
                    <Category p1={xyz} />
                </div>
                <div className='col-9 border border-1'>
                    <Allproducts p2={catvalues} />
                </div>
            </div>
        </div>
    )
}