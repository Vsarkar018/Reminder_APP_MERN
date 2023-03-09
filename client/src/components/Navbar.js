import React, { useState } from "react";
import styled from 'styled-components'
import { useGlobalContext } from "../context/appContext";

const Navbar = () =>{
    const {user,logout} = useGlobalContext();
    const [showLogout,setShowLogout] = useState(false);
    return (
        <div className="nav-center">
            
        </div>
    )
}