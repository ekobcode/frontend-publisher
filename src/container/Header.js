import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Routes, Route, Switch, Link  } from "react-router-dom";


class Header extends React.Component{
    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Publisher</a>
                    </div>
                    <div class="d-flex" role="search">
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="btn btn-outline-success" aria-current="page">Example 1</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/example2" className="btn btn-outline-success" aria-current="page">Example 2</Link>
                        </li>
                     </ul>
                    </div>
                </nav>
            </div>
        )
        
    }
}


export default Header