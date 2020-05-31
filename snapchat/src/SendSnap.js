import React, { Component } from "react";

import axios from "axios";

export default class SendSnap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 1,
      to: props.receiver
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.fileInput = React.createRef();
  }

  handleDuration(e) {
    this.setState({duration: e.target.value})
  }

  handleImage(e) {
    this.setState({image: this.fileInput})
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.image){
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`
      );
    }

    
    
    const formData = new FormData();
    formData.append("duration", this.state.duration);
    formData.append("to", this.state.to);
    formData.append("image", this.fileInput.current.files[0]);
    
    console.log(FormData)
    
    // AXIOS ----
    axios.post("http://snapi.epitech.eu/snap", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'token': localStorage.getItem('tokenAuth')
      }})
    
    // FETCH ----
    // fetch("http://snapi.epitech.eu/snap", {
    //   method: "POST",
    //   headers: { 
    //     "Content-Type": "multipart/form-data",
    //     token: "5zoifgLKtviRDgRV8qQipdbP"
    //   },
    //   body:FormData,
    // })
      .then(res => {
        console.log({res});
      }).catch(err => {
          console.error({err});
      });
  }

  
  render() {
    // const user = this.props.receiver
    // if (!user) {
    //   return <h3>No one is selected...</h3>
    // }
    // else {
      return (
        <div>
          <h3>Send a snap to {this.props.receiver}</h3>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.duration} onChange={this.handleDuration}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <input type="file" ref={this.fileInput} onChange={this.handleImage} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    // }
  }
}
