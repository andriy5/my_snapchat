import React, { Component } from 'react';

export default class ReceiveSnap extends Component {

  state = {
    snap: null,
    isReady: false
  }
  
  componentDidMount () {
    let handle = this.props.match.params.id;
    console.log(handle);

    fetch(`http://snapi.epitech.eu/snap/${handle}`, {
      method: "GET",
      headers: { token: "5zoifgLKtviRDgRV8qQipdbP" }, 
    }
    )
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log( JSON.parse(data) )})
    //   this.setState(() => ({ snap: JSON.parse(data), isReady: true })
    // )})
    // .then((snap) => {
    //   this.setState(() => ({ snap , isReady: true}))
    // })
  }
  
  
  render() {
    const image = this.state.snap
    if (!this.state.isReady){
      return <h3>It comes...</h3>;
    }
    else {
      console.log(image)
      return (
        <div>
          TEST
        </div>
      )
    }
  }
}
