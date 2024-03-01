import React from 'react'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Comp4 from './Comp4'

export default function Comp1() {
    return (
        <div className='container border border-1 p-3'>
            <h1>Comp1</h1>
            <hr />
            <div className="row">
                <div className="col-3">
                    <Comp2 />
                    <hr />
                    <Comp3 />
                </div>
                <div className="col-9">
                    <Comp4 />
                </div>
            </div>
        </div>
    )
}