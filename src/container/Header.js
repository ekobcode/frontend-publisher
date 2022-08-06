import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Publisher</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        )
        
    }
}


export default Header