import React, { Component } from 'react'
import ClassC from './ClassC'


export default class ClassB extends Component {
  render() {
    return (
      <div>
        <h4>class B,{this.props.p1}</h4>
        <div className="p-5 border">
            <ClassC p2={this.props.p1}/>
        </div>
      </div>
    )
  }
}
