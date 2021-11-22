import React, { Component } from 'react';
import Home from './Home';
import { homePageScreen } from './data';
// create component
export default class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      Loading:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({Loading:false});
    },2000)
  }
  render() {
    return (
      <div className='row'>
        {this.state.Loading ? <img className='loadingImage' src="../../images/homePageScreen.png" /> : <Home />}
        </div>
    );
  }
}