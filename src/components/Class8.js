import React, { Component } from 'react'
import Class9 from './Class9'

export default class Class8 extends Component {

    constructor() {
        super()
        this.state = {
            catname:'test'
        }
        this.x1 = React.createRef()
    }

    myfun(){
        this.setState({
            catname:this.x1.current.value
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>Component Class 8</h3>
                <input type="text" ref={this.x1}/>
                <button onClick={()=>{this.myfun()}}>Enter</button>{this.state.catname}

                <hr />

                <Class9 p1={this.state.catname} />
            </div>
        )
    }
}
