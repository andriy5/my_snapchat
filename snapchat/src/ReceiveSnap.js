import React, { Component } from 'react';

export default class ReceiveSnap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      snap: null,
      isReady: false,
      duration: this.props.duration,
    }

    this.countdownTime = this.countdownTime.bind(this);
  }
  

  componentDidMount () {
    let handle = this.props.match.params.id;
    this.setState({idSnap: handle })

    fetch(`http://snapi.epitech.eu/snap/${handle}`, {
      method: "GET",
      headers: { token: "5zoifgLKtviRDgRV8qQipdbP" }, 
    }
    )
    .then(response =>  response.blob())
    .then((blob) => {
      let timeleft = this.state.duration;
      const image = window.URL.createObjectURL(new Blob([blob]))
      this.setState({ isReady: true, snap: image})
      this.countdownTime(timeleft)
    })
  }


  countdownTime(time){
    let handle = this.props.match.params.id;
    let idSnap = { id: handle }
    console.log(idSnap);


    let tempDuration = time-1;
    if (tempDuration == -1){
      fetch('http://snapi.epitech.eu/seen', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "5zoifgLKtviRDgRV8qQipdbP" 
      },
      body: JSON.stringify(idSnap)
      })
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      return (this.setState({ isReady: false, duration: 0 }))
    }
    else {
      setTimeout(() => {
        this.setState({duration: tempDuration});
        this.countdownTime(tempDuration);
      }, 1000)
    }
  }

  
  render() {
    if (this.state.duration == 0) {
      return <h3>Snap deleted.</h3>;
    }
    else if (!this.state.isReady){
      return <h3>It comes...</h3>;
    }
    else {
      return (
        <div>
          <h1>{this.state.duration}</h1>
          <img src={this.state.snap} />
        </div>
      )
    }
  }
}
