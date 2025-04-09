import { Link, Outlet, useNavigate } from 'react-router-dom';

import {useEffect, useState } from 'react'
import './Root.css'
import NavComponent from '../../../components/nav';
import SidebarComponent from '../../../components/sidebar';

const Root = () => {
    const [showPopup , setShowPopup] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate('/')
        }
    })
    const controlPopup = () => {
        setShowPopup(true)
    }
    const logoutAccept = () => {
        setShowPopup(false)
        fetch('https://vica.website/api/logout' , {
            method : 'POST',
            headers : {
                "Accept" : "application/json",
                AUTHORIZATION : localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            localStorage.removeItem("token")
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    const logoutDecline = () => {
        setShowPopup(false)
    }
    return (
        <div className='root'>
            <SidebarComponent controlPopup={controlPopup}/>
            <div className="content">
                <NavComponent/>
                <div className='hero'>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
                {(showPopup) && (
                    <div className='popupOverlay'>
                        <div className='popupContent'>
                            <p>Are you sure you want to Logout?</p>
                            <div className='btns'>
                                <button onClick={logoutAccept} className='yesBtn'>Yes</button>
                                <button onClick={logoutDecline} className='noBtn'>No</button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Root