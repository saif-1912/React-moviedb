import React from 'react'
import { useDispatch } from 'react-redux'
import { catdatatransfer } from '../Redux/reducers/catslice'


export default function Comp3() {

    const dispatch = useDispatch()

    function myfun(ev) {
        // alert(ev.target.innerText)        
        dispatch(catdatatransfer(ev.target.innerText))
    }
    return (
        <div className='border border-1 p-3'>
            <h4>Comp3</h4>
            <ul>
                <li onClick={myfun}>Mens</li>
                <li onClick={myfun}>Womens</li>
                <li onClick={myfun}>kids</li>
            </ul>
        </div>
    )
}
