import React, { Component } from "react";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isReady: false,
    };
  }

  componentDidMount() {
    fetch("http://snapi.epitech.eu/all", {
      method: "GET",
      headers: { token: "5zoifgLKtviRDgRV8qQipdbP" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isReady: true,
          data });
        console.log(this.state.data);
      });
  }

  render() {
    const users = this.state.data

    if (!this.state.isReady) {
      return (
      <div>It comes...</div>
      );
    }
    else {
      return (
        <div>
          <ul>
          { users.data.map((user, index) => (
            <li key={index}>
              <p>
                {user.email}
              </p>
            </li>
            ))}
          </ul>
        </div>
      );
    }
    
  }
}