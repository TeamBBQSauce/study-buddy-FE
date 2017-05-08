import React, { Component } from 'react'

export default class App extends Component {
  constructor () {
    super()
    this.state = { name: ''}
  }

  componentDidMount () {
    this.httpGetAsync('http://localhost:3000/data.json')
  }

  setName (response) {
    var parsedResponse = JSON.parse(response)
    this.setState({name: parsedResponse['name'].toString()})
  }

  httpGetAsync (theURL) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) { this.setName(xmlHttp.responseText) }
    }.bind(this)
    xmlHttp.open('GET', theURL, true)
    xmlHttp.send(null)
  }

  render () {
    return (
    <div>
      {this.state.name}
    </div>
    )
  }
}
