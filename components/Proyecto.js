import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Proyecto extends Component {


  constructor(props) {
    super(props)

    this.state = {
      name: "Proyecto Integrador",
      version: 1.0,
    }
  }

  render () {

    return (
      <div>
        <h1> {this.state.name} </h1>
        <p> Version {this.state.version} </p>
      </div>
    )
  }

}

export default Proyecto
