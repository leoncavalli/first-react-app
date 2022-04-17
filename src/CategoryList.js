import React, { Component } from 'react'

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.model.title}</h2>  
      </div>
    )
  }
}
