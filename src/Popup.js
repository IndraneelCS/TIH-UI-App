import React, { Component } from 'react';
import { notifciatonAPICall } from "./data";

// create component
export default class Popup extends Component {
    constructor(){
        super();
        this.state={
                data:null,           
                id : 0, 
                fanLevel: localStorage.getItem("selectLevel"),
                priority: localStorage.getItem("selectPriority")
            }
        }

    componentDidMount(){
         localStorage.setItem("Id",1000);
        setInterval(()=>{
            const number = (Math.random(0,1)*10).toFixed(0);
            fetch('http://ad19-122-179-113-18.ngrok.io/api/pushnotifications')
            .then(response => response.json())
            .then(json => {                
               this.setState({ data : json})
               
                // //future notifciaton filter prupse
                // let filterAPICall = notifciatonAPICall.filter((eachRec) => {
                //     if((this.state.fanLevel != "All" && this.state.fanLevel == eachRec.fanLevel)
                //             && (this.state.priority != "All" && this.state.priority == eachRec.priority)) {
                //             return eachRec
                //     }
                // });

                //if(filterAPICall.length > 0) this.setState({ data : filterAPICall })                
               // else this.setState({ data : null })     
            })
        },5000);
    }
    filterID = () => {
        const id = localStorage.getItem("Id");
        //var a = moment(new Date(toUTCString()));
        //var b = moment([2007, 0, 28]);
        //a.diff(b)
        if (this.state.data){
            localStorage.setItem("Id",this.state.data[this.state.data.length-1].id);
            return this.state.data.filter((data) => data.id > id);
        }
    }
    filterData = () =>{
        let filteredData ;
        let notifications = this.filterID();
        if (notifications) {
            filteredData = notifications.filter((data)=>{
                if(this.state.priority == 'All'){
                    return this.state.priority && this.state.fanLevel && data.fanLevel == this.state.fanLevel;
                } else{
                    return this.state.priority && this.state.fanLevel && data.priority == this.state.priority && data.fanLevel == this.state.fanLevel;
                }
            })
        }
        return filteredData;
    }
    render() {
        const filteredData = this.filterData();
        return (
            <div>
                {this.state.data && filteredData.map((data, index) => {                   
                            return (
                            <div className='col-4' key= {"notificationDiv_" +index} className="alert popUpHeaderClass alert-dismissible fade show" style = {{ marginBottom : "0.1em", marginTop : "0.1em" }} role="alert">                        
                                <div> <img className="gmailLogoClass" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Marvel_Stadium_logo.svg/2560px-Marvel_Stadium_logo.svg.png" /> 
                            </div>
                            <div className = "notificationTextClass col-8"> 
                               { data.messageHeader } <br/>
                               { data.message.substr(0,20) } <br/> 
                               { data.fanLevel } { data.priority }
                             </div>                       
                        
                            {/* <p>{this.state.data.body.substr(0, 100)} </p>
                            <p>{this.state.data.body.substr(0,100)} </p> */}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>                            )
                })}
            </div>
        )
    }
}