import React, { Component } from 'react'
import ClassB from './ClassB'
import categoryContext from '../ContextApi/categorycontextapi'


export default class ClassA extends Component {

    constructor() {
        super()
        this.state = {
            catname: ''
        }
    }

    myfun(value) {
        console.log(value)
        this.setState({ catname: value })
    }

    render() {
        return (
            <div className='container'>
                <h1>Props Drilling</h1>

                <input type="text" onBlur={(event) => { this.myfun(event.target.value) }} />
                <button>Search</button>

                <div className="border p-5">
                    <categoryContext.Provider value={this.state.catname}>                        
                        <ClassB p1={this.state.catname} />
                    </categoryContext.Provider>
                </div>

            </div>
        )
    }
}
