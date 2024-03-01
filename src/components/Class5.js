import React, { Component } from 'react'
import apipath from '../env'


export default class Class5 extends Component {
    constructor() {
        super()
        this.state = {
            apidata: []
        }
    }

    componentDidMount() {
        console.log('did mount called')
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(val => {
                console.log(val)
                this.setState({
                    apidata: val
                })

            })
    }


    render() {
        console.log('Render', this.state.apidata)
        return (
            <div className='container'>
                <h1 className='text-center'>Component Class 5</h1>
                <div className="row">
                    {
                        <div className="col-3">
                            {this.state.apidata.map(obj => {
                                return <h3>{obj.title}</h3>
                            }
                            )}
                        </div>
                    }
                </div>
            </div>
        )
    }
}