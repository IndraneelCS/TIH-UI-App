import React from 'react';
export default class Footer extends React.Component{
    render(){
        return(
        <div className='footer'>
            <ul className="nav  col-12" >
                <li className="nav-item col-3">
                    <a className="nav-link navLink disabled" href="#">
                        <i className="far fa-envelope icon" style= {{fontSize :"32px"}} ></i>
                        <span className = "iconTextClass"> For you </span>
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link navLink disabled" href="#">
                    <i class="fa fa-users fa-2x"  aria-hidden="true"></i>

                    <span className = "iconTextClass"> Stadium Info </span>
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link navLink disabled" href="#">
                        <i className="fa fa-calendar fa-2x" ></i>
                        <span className = "iconTextClass"> Schedule </span>
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link navLink disabled" href="#">
                    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                       <span className = "iconTextClass"> Profile </span>
                    </a>
                </li>
            </ul>
        </div>
        )
    }
}