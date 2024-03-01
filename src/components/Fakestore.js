import React, { useState } from 'react'
import Content from './Content'
import SearchContext from '../Context/Searchcontext'

export default function Fakestore() {

    var [rec, setrec] = useState('')
    var [rec1, setrec1] = useState('')

    function myfun(event) {

        // console.log(event)
        // console.log(event.target.value) 
        setrec(event.target.value)

    }
    function myfun1(event) {

        // console.log(event)
        console.log(event.target.value) 
        setrec1(event.target.value)

    }
    return (
        <div className='container border border-1'>
            <h1 className='p-2'>Fakestore - Props Drilling</h1>
            <div className='border-bottom border-1 p-3'>
                <input type="text" className='form-control' onBlur={myfun} />
                <br />
                <br />
                <input type="text" className='form-control' onBlur={myfun1} />
                <SearchContext.Provider value={rec1}>
                    <Content p1={rec} />
                </SearchContext.Provider>

            </div>
        </div>
    )
}
