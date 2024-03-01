import React, { Component } from 'react'

export default class Class7 extends Component {
    constructor() {
        super()
        this.state = {
            api: [],
            catname: 'test'
        }
        this.x1 = React.createRef()
    }

    componentDidMount() {
        console.log('did mount', this.state.catname)
    }

    componentDidUpdate(prevProps, prevstate) {
        console.log(prevstate)
        console.log('dis update', this.state.catname, prevstate.catname)


        if (this.state.catname != prevstate.catname) {
            if (this.state.catname == '') {
                var apipath = 'https://fakestoreapi.com/products'
            } else {
                var apipath = `https://fakestoreapi.com/products/category/${this.state.catname}`
            }
            console.log(apipath)
            fetch(apipath)
                .then(res => res.json())
                .then(val => {
                    console.log(val)
                    this.setState({
                        api: val
                    })
                })
        }

    }

    myfun() {
        this.setState({
            catname: this.x1.current.value
        })
    }

    render() {
        return (
            <div className='container'>
                <h1>Component Class 7</h1>
                <input type="text" ref={this.x1} />
                <button onClick={() => { this.myfun() }}>Enter</button>{this.state.catname}

                <div className="row">
                    <hr />
                    {

                        this.state.api.map(obj =>
                            <div className="col-3">
                                <h3>{obj.title}</h3>
                            </div>
                        )

                    }
                </div>
            </div>
        )
    }
}
