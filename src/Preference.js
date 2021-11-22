import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { fanLevelData, priorityData } from "./data";

// create component

export default class Preference extends Component {


    constructor(){
        super();
        this.state= {
            "selectLevel" : localStorage.getItem("selectLevel"),
            "selectPriority" : localStorage.getItem("selectPriority"),
            "buttonClick" : false
        }
       
  }

  onLevelChange = (e) => {
    this.setState({ "selectLevel" : e.target.value });
  }

  onEventChange = (e) =>{
    this.setState({ "selectPriority" : e.target.value });
  }

  saveButtonClick = () => {
    this.setState({"buttonClick" : true})
    localStorage.setItem("selectLevel", this.state.selectLevel);
    localStorage.setItem("selectPriority",  this.state.selectPriority);
  }

  render() { 
   
    return (
        <div>
            <Header />
            {this.state.buttonClick ? <div className="alert alert-success alert-dismissible fade show" role="alert">
            Preference saved successfully !
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            : ""}
          <div className="form-container">
            <label for="sel1"> Fan Level: </label>
            <select  className="form-control resizeformc"  id="sel1" defaultValue={this.state.selectLevel} onChange={this.onLevelChange} >       
              {fanLevelData.map((data)=>{
                              return (
                                  <option value={data} key={"level_"+data}>{data}</option>
                              )
              })}
            </select>
          
          <label for="sel1"> Priority: </label>
          <select className="form-control resizeformc" id="sel2"  defaultValue={this.state.selectPriority} onChange={this.onEventChange} >       
            {priorityData.map((data)=>{
                            return (
                                <option value={data} key={"event_"+data}>{data}</option>
                            )
            })}
          </select>
          </div>
          <div>
            <button type="button" class="btn btn-success saveBtn" onClick={this.saveButtonClick}>Save</button>
            </div>
            <Footer />
        </div>
    );
  }
}