import React, { Component } from 'react';
import Header from './Header';
import Popup from './Popup';
import Footer from './Footer';
import {Data, homePageScreen} from './data';

// create component
export default class Home extends Component {
  render(){
      return(
          <div className='col-12'>
            <div className='dashboard'>
                <Header />
                <Popup />
                <p><b>Upcoming</b></p>
                <div className='home'>
                
                    {/* <div className="row">
                    {Data.map((data)=>{
                        return (<div className="col-lg-4 col-md-6 col-sm-12 col-12" >
                            <div className="card">
                            <img className="card-img-top rounded float-left" src={data.imgUrl} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{data.team}</h5>
                                <p className="card-text">{data.time}</p>
                                <p className="card-text">{data.location}</p>
                            </div>
                        </div>
                        </div>)
                    })}
                        
                    </div> */}
                    <div className="card-deck row">
                            {Data.map((data)=>{
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="card">
                                        <img className="card-img-top float-left cardImageSize" src={data.imgUrl} style ={{borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}} alt="Card image cap"/>
                                            <div className="card-body">
                                                <p className="eventTime"> { data.dateTime} </p>
                                                <h6 className="card-title">{data.event}</h6>
                                            </div>
                                        <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <p className="card-text cardFontSize">{data.team} -  {data.time}</p>
                                                    <p className="card-text cardFontSize">{data.event}</p>
                                                    <p className="card-text cardFontSize">{data.location}</p>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                                )
                            })}
                    
                    </div>

                    <div className="cardFooterSize">
                        <img className="cardFooterImageSize" src={homePageScreen.footetPageScreen} alt="Card image cap" />
                    </div>
                </div>
            </div>  
            <Footer />
          </div>
      )
  }
}