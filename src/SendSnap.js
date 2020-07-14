import React, { Component } from "react";

import axios from "axios";
import { Redirect, Route } from "react-router-dom";

export default class SendSnap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 1,
      to: this.props.receiver
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.state)
  }
  

  handleDuration(e) {
    this.setState({duration: e.target.value})
  }

  handleImage(e) {
    this.setState({image: this.fileInput})
  }

  handleSubmit(e) {
    e.preventDefault()
    document.getElementById("message").style.display = "block";

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
      .then(res => {
        document.getElementById("message").style.display = "none";
        document.getElementById("send-success").style.display = "block";
        console.log({res});
      }).catch(err => {
          console.error({err});
      });
  }

  
  render() {
    if (this.props.receiver){
      return (
        <div>
          <p id="message" style={{display: 'none'}}>Chargement...</p>
          <h3>Send a snap to <u>{this.props.receiver}</u></h3>
          <div className="form-part">
            <form onSubmit={this.handleSubmit}>
              <div className="second-part">
                <h4>Choose seconds</h4>
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
              </div>
              <div className="file-part">
                <h4>Choose an image</h4>
                <input type="file" ref={this.fileInput} onChange={this.handleImage} />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div id="send-success" style={{display: 'none'}}>
            <iframe src="https://giphy.com/embed/tIeCLkB8geYtW" width="120" height="95" frameBorder="0" class="giphy-embed"></iframe>
            <p>Send with success !</p>
          </div>
        </div>
      );
    }
  }
}
