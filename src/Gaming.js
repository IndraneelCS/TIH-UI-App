import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// create component
export default class Gaming extends Component {
  render() {
    return (
        <div>
            <Header />
            <h1>Coming Soon Gaming Page</h1>
            <Footer />
        </div>
    );
  }
}