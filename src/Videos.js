import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { mutlipleVideos } from "./data"

// create component
export default class Videos extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = { 
        "mutlipleVideos" : mutlipleVideos,
        "isAnyButtonClick" : false,
        "videoURL" : null
      };
    }

  onClick(index) {
    let tmp = this.state.mutlipleVideos;
    this.setState({ "isAnyButtonClick" : true });  
    this.setState({ "videoURL" : tmp[index].src  }); 
  }

  render() {
    return (
        <div>
            <Header />
        <h3>Enjoy the stadium broadcast view from any angle camera </h3>
        

        <div style ={{marginTop:"30px"}}>
                {this.state.mutlipleVideos.map((el, index) =>
                    <button type="button" class="btn btn-secondary" style={{ marginRight:3, marginBottom:10 }} key={index} onClick={() => this.onClick(index)}>
                      {el.name}
                    </button>
                )}
           </div>
           <div>
           { this.state.isAnyButtonClick ? 
            <video key={this.state.videoURL} width="350" height="350" controls="controls" autoplay= "true" >
              <source src= {this.state.videoURL} type="video/mp4" />
            </video> : "" }
           </div>
            <Footer />
        </div>
    );
  }
}