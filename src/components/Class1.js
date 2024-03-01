import React, { Component } from 'react'

export default class Class1 extends Component {
  render() {
    console.log(this);
    return (
      <div className='text-center'>
        <h1>Component Class 1</h1>
        <p>
          Props Data:{this.props.uname},{this.props.uage}
        </p>
      </div>
    )
  }
}
