import React, { Component } from 'react'

export default class Class3 extends Component {
    constructor() {
        super()
        this.state = ({
            name: 'akash'
        })

        this.x1 = React.createRef()
        this.x2 = React.createRef()
        this.x3 = React.createRef()
    }

    myfun() {
        this.setState({
            name: 'saif'
        })

    }
    myfun1() {
        var data1 = this.x1.current.value
        var data2 = this.x2.current.value

        var ans = +data1 + +data2
        this.x3.current.innerText = ans
    }
    render() {
        return (
            <div>
                <h1 className='text-center'>Component Class 3</h1>

                <p>{this.state.name}</p>
                <button onClick={() => { this.myfun() }}>Enter</button>

                <hr />

                <input type="text" ref={this.x1} />
                <input type="text" ref={this.x2} />

                <button onClick={() => { this.myfun1() }}>Enter</button>
                
                <p ref={this.x3}></p>
            </div>

        )
    }
}
