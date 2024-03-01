import React, { Component } from 'react'

export default class Class2 extends Component {
    constructor() {
        super()
        this.state = ({
            name: 'Saif',
            Age: 20,
            Brands: ['Nike', 'Puma', "Addidas"]
        })
    }
    myfun() {
        this.setState({
            Age: 23,
            name: 'harry',
            Brands: [...this.state.Brands, 'levis']
        })
    }

    render() {
        console.log(this)
        return (
            <div>
                <h1 className='text-center'>Component Class 2</h1>
                <p>
                    Name : {this.state.name}
                    Age : {this.state.Age}
                </p>
                <ul>
                    {
                        this.state.Brands.map(val =>
                            <li>{val}</li>
                        )
                    }
                </ul>

                <button onClick={() => { this.myfun() }}>Enter</button>

            </div>
        )
    }
}
