import React, { Component } from 'react'

export default class Class9 extends Component {

    constructor() {
        super()
        this.state = {
            api: []
        }
    }

    componentDidMount() {
        console.log('did mount', this.props.p1)
    }

    componentDidUpdate(prevprops) {
        console.log('did upadte', this.props.p1, prevprops.p1)

        if (this.props.p1 != prevprops.p1) {

            if (this.state.catname == '') {
                var apipath = 'https://fakestoreapi.com/products'
            } else {
                var apipath = `https://fakestoreapi.com/products/category/${this.props.p1}`
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

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {
                        this.state.api.map(obj =>
                        <div className="col-3">
                            <img src={obj.image} style={{width:'100px'}}/> 
                            <h3>{obj.title}</h3>
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
