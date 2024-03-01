import React, { Component } from 'react'

export default class Class4 extends Component {
    constructor() {
        super()
        this.state = {
            apidata: [],
            count: 100
        }
    }
    componentDidMount() {
        console.log('component Did Mount called')
    }

    componentDidUpdate() {
        console.log('component Did Update called', this.state.count)
    }
    componentWillUnmount() {
        console.log('Will Unmount called')
    }

    myfun() {
        this.setState({
            apidata: ['user1','user1','user1'],
            count:this.state.count+10
        })
    }


    render() {
        return (
            <div>
                <h1 className='text-center'>Component Class 4</h1>
                <p>{this.state.count}</p>
                <button onClick={()=>{this.myfun()}}>Enter</button>
            </div>
        )
    }
}
