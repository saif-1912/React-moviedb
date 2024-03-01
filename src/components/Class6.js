import React, { Component } from 'react'

export default class Class6 extends Component {
    componentDidMount() {
        document.body.addEventListener('mousemove', this.myfun)
    }

    componentWillUnmount(){
        document.body.removeEventListener('mousemove', this.myfun)
    }

    myfun() {
        console.log(Math.random())
    }
    render() {
        return (
            <div>
                <h1 className='text-center'>Component Class 6</h1>

            </div>
        )
    }
}
