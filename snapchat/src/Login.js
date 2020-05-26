import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <form >
          <label for="email">E-mail </label>
          <input type="email" id="email"/><br/>
          <label for="password">Password </label>
          <input type="password" id="password"/><br/>
          <input type="submit" value="Connect" />
        </form>
      </div>
    );
  }
}