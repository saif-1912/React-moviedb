import React, { Component } from 'react'
import categoryContext from '../ContextApi/categorycontextapi'

export default class ClassC extends Component {
    constructor() {
        super()
        this.state = {
            api: []
        }
    }

    componentDidUpdate(prevprops) {
        console.log('Did update called')
        console.log(prevprops, this.props.p2)
        if (this.props.p2 != '' && prevprops.p2 != this.props.p2) {
            fetch('https://fakestoreapi.com/products/category/' + this.props.p2)
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    this.setState({ api: json })
                }
                )
        }
    }


    render() {
        return (
            <div className='container'>
                <h4>class c,{this.props.p2}</h4>
                <hr />
                consumer:
                <categoryContext.Consumer>                   
                    {
                        value => <p>{value}</p>
                    }
                </categoryContext.Consumer>
                <div className="row">
                    {
                        this.state.api.map((obj) =>
                            <div className="col-3">
                                <img src={obj.image} style={{ width: '100px' }} />
                                <h3>{obj.title}</h3>
                            </div>
                        )

                    }


                </div>
            </div>
        )
    }
}
