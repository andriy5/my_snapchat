import React, { Component } from "react";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("http://snapi.epitech.eu/all", {
      method: "GET",
      headers: { token: "5zoifgLKtviRDgRV8qQipdbP" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Machin 1</li>
          <li>Machin 2</li>
          <li>Machin 3</li>
        </ul>
      </div>
    );
  }
}

function ShowUsers(params) {
  console.log(params)
  
  // for (const key in params) {
  //   if (object.hasOwnProperty(key)) {
  //     const element = object[key];
  //     console.log(element)
  //   }
  // }
}
