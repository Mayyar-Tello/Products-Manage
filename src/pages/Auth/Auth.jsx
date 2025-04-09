import './Auth.css'
import { Outlet } from 'react-router-dom'

const Auth = () => {
    return (
        <div className='auth'>
            <img src="/src/assets/img/AuthBgColor.png" alt="mainPageBg" className='Auth_Bg_Color' />
            <img src="/src/assets/img/AuthShape.png" alt="mainPageBg" className='Auth_Shape'/>
            <Outlet/>
        </div>
    )
}

export default Auth